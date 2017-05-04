<template>
    <div class="appbar-padding">
        <page-container>
            <div class="row center-xs has-gutter">
                <div class="col-xs-5">
                    <cards-image :img="image" style=" padding-bottom: 100%">
                        <div class="row center-xs middle-xs" style="z-index: 100; height: 100%; width: 100%; position: absolute; top: 0; left: 0;">
                            <div class="col-xs-fluid-24">
                                <div class="button-center-container">
                                    <raised-button @click="addFile" v-ripple><icon name="upload"></icon> {{buttonAddText}}</raised-button>
                                </div>
                            </div>
                        </div>
                    </cards-image>
                </div>
                <input type="file" style="display: none" ref="inputFile" @change="upload">
                <div class="col-xs-fluid-24 col-lg-10">
                    
                    <cards v-if="$subReady && $subReady.manufacturers">
                        <form @submit.prevent="create">
                            
                            
                            <cards-content>
                                <div class="row has-gutter">
                                    <div class="col-xs-fluid-8">
                                        <dropdown-select v-model="type" label="Product Type">
                                            <menu-option value="Cpu">CPU</menu-option>
                                            <menu-option value="Cpucooler">CPU Cooler</menu-option>
                                            <menu-option value="Motherboard">Motherboard</menu-option>
                                        </dropdown-select>
                                    </div>
                                    <div class="col-xs-fluid-24">
                                        <textfield v-model="parse.name" placeholder="Product Name"></textfield>
                                    </div>
                                    <div class="col-xs-fluid-12">
                                        <dropdown-select v-model="parse.manufacturerId" label="Manufacturer">
                                            <menu-option v-for="(m, index) in manufacturers" :key="index" :value="m._id">{{m.name}}</menu-option>
                                        </dropdown-select>
                                    </div>
                                    <div class="col-xs-fluid-12">
                                        <textfield v-model="parse.partNo" placeholder="Part #"></textfield>
                                    </div>
                                </div>
                            </cards-content>
                            <divider></divider>
                            <product-add-cpu v-if="type=== 'Cpu'" v-model="cpu"></product-add-cpu>
                            <divider></divider>
                            <cards-action>
                                <div class="pull-right">
                                    <color-button type="submit" class="primary">Add Product</color-button>
                                </div>
                            </cards-action>
                        </form>
                    </cards>
                </div>
            </div>
        </page-container>
    </div>
</template>

<script>
    import {Product, Cpu} from "/imports/model/Product";
    import {Manufacturer} from "/imports/model/Manufacturer";
    import {Images} from "/imports/model/Images";
    export default {
        data() {
            return {
                parse: {
                    name: "",
                    manufacturerId: "",
                    partNo: "",
                    imageId: "",
                },
                cpu: {
                    dataWidth: "",
                    socket: "",
                    operatingFrequency: "",
                    maxTurboFrequency: "",
                    cores: "",
                    l1Cache: "",
                    l2Cache: "",
                    l3Cache: "",
                    lithography: "",
                    thermalDesignPower: "",
                    includeCpuCooler: false,
                    hyperThreading: false,
                    maximumSupportedMemory: "",
                    integratedGraphics: "",
                },
                type: "",
                image: "",
            }
        },
        computed: {
            buttonAddText() {
                if (this.image) {
                    return "Change Photo";
                }
                return "Add Photo";
            }
        },
        methods: {
            clearText() {
                this.parse = {
                    name: "",
                    manufacturer: "",
                    partNo: "",
                    imageId: "",
                };

                this.cpu = {
                    dataWidth: "",
                    socket: "",
                    operatingFrequency: "",
                    maxTurboFrequency: "",
                    cores: "",
                    l1Cache: "",
                    l2Cache: "",
                    l3Cache: "",
                    lithography: "",
                    thermalDesignPower: "",
                    includeCpuCooler: false,
                    hyperThreading: false,
                    maximumSupportedMemory: "",
                    integratedGraphics: "",
                }
            },
            create() {
                let p = new Product();

                if (this.type === "Cpu") {
                    p = new Cpu();
                    this.specificParse = this.cpu;
                }

                p.callMethod("create",this.parse, this.specificParse, (err, res) => {
                    if(err) {
                        return this.$snackbar.run(err.reason, ()=> {}, "OK", "error");
                    }
                    this.clearText();
                    return this.$snackbar.run("Successfully add new product", ()=> {});
                }) 
                
            },
            upload() {
                let self = this;
                let fileInput = this.$refs.inputFile;

                if (fileInput.files && fileInput.files[0]) {
                    var upload = Images.insert({
                        file: fileInput.files[0],
                        streams: 'dynamic',
                        chunkSize: 'dynamic'
                    }, false);
    
                    upload.on('start',function() {
                        // self.uploadNewData = false;
                        // setTimeout(()=> {
                        //     self.currentUpload.set(this);
                        //     self.showCardsUploader = true;
                        // }, 300);
                    });
    
                    upload.on('end', (error, fileObj) => {
                        console.log(error);
                        if (error) {
                            return this.$snackbar.run('Error during upload: ' + error.reason, ()=> {}, "OK", "error");
                        } 
                        
                        this.$snackbar.run('File "' + fileObj.name + '" successfully uploaded');
                        this.parse.imageId = fileObj._id;
                        this.image = fileObj._downloadRoute + "/images/" + fileObj._id + "/original/" + fileObj._id + "." +fileObj.extension;
                        // this.currentUpload.set(false);
                    });
                    upload.start();
                }
            },
            addFile() {
                this.$refs.inputFile.click();
            },
        },
        meteor: {
            subscribe: {
                manufacturers: [],
                products: [],
            },
            manufacturers() {
                return Manufacturer.find({}, {sort: {name: 1}});
            },
        }
    }
</script>