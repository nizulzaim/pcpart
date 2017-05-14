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
                                            <menu-option value="Memory">Memory</menu-option>
                                            <menu-option value="Storage">Storage</menu-option>
                                            <menu-option value="Gpu">GPU/ Video Cards</menu-option>
                                            <menu-option value="Psu">PSU / Power Supply</menu-option>
                                            <menu-option value="Case">Case</menu-option>
                                        </dropdown-select>
                                    </div>
                                    <div class="col-xs-fluid-24"></div>
                                    <div class="col-xs-fluid-12">
                                        <textfield v-model="parse.name" placeholder="Product Name"></textfield>
                                    </div>
                                    <div class="col-xs-fluid-12">
                                        <textfield v-model="parse.partNo" placeholder="Part #"></textfield>
                                    </div>
                                    <div class="col-xs-fluid-12">
                                        <dropdown-select v-model="parse.manufacturerId" label="Manufacturer">
                                            <menu-option v-for="(m, index) in manufacturers" :key="index" :value="m._id">{{m.name}}</menu-option>
                                        </dropdown-select>
                                    </div>
                                    <div class="col-xs-fluid-12" style="height: 72px; padding-top: 16px;">
                                        <icon-button name="plus" @click="showAddManufacturer = true" v-ripple></icon-button>
                                    </div>
                                </div>
                            </cards-content>
                            <divider></divider>
                            <product-add-cpu v-if="type=== 'Cpu'" v-model="cpu"></product-add-cpu>
                            <product-add-cpucooler v-if="type=== 'Cpucooler'" v-model="cpucooler"></product-add-cpucooler>
                            <product-add-motherboard v-if="type=== 'Motherboard'" v-model="motherboard"></product-add-motherboard>
                            <product-add-memory v-if="type=== 'Memory'" v-model="memory"></product-add-memory>
                            <product-add-storage v-if="type=== 'Storage'" v-model="storage"></product-add-storage>
                            <product-add-psu v-if="type=== 'Psu'" v-model="psu"></product-add-psu>
                            <product-add-gpu v-if="type=== 'Gpu'" v-model="gpu"></product-add-gpu>
                            <product-add-case v-if="type=== 'Case'" v-model="casing"></product-add-case>
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
        <reveal v-model="showAddManufacturer" >
            <div class="col-md-7">
                <cards v-depth="3">
                    <form @submit.prevent="addManu">
                        <cards-content>
                            <div class="font-subhead no-margin">Add Manufacturer</div>
                        </cards-content>
                        <divider></divider>
                        <cards-content-scrollbar>
                            <textfield type="text" v-model="manufacturerName" placeholder="Manufacturer Name"></textfield>
                        </cards-content-scrollbar>
                        <divider></divider>
                        <cards-action>
                            <div class="pull-right">
                                <flat-button v-ripple @click="showAddManufacturer = false">Cancel</flat-button>
                                <flat-button type="submit" v-ripple class="primary">Add Manufacturer</flat-button>
                            </div>
                        </cards-action>
                    </form>
                </cards>
            </div>
        </reveal>
    </div>
</template>

<script>
    import {Product, Cpu, Cpucooler, Motherboard, Memory, Storage, Gpu, Psu, Case} from "/imports/model/Product";
    import {Manufacturer} from "/imports/model/Manufacturer";
    import {Images} from "/imports/model/Images";
    export default {
        data() {
            return {
                manufacturerName: "",
                showAddManufacturer: false,
                parse: {
                    name: "",
                    manufacturerId: "",
                    partNo: "",
                    imageId: "",
                },
                tellChangeManufacturer: "",
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
                cpucooler: {
                    socket: "",
                    liquidCooled: false,
                    bearingType: "",
                    minNoiseLevel: "",
                    maxNoiseLevel: "",
                    minFan: "",
                    maxFan: "",
                    height: "",
                },
                motherboard: {
                    formFactor: "",
                    socket: "",
                    chipset: "",
                    memorySlot: "",
                    memoryType: "",
                    maximumSupportedMemory: "0",
                    raidSupport: false,
                    onboardVideo: false,
                    crossFireSupport: false,
                    sliSupport: "",
                    sata6gb: "0",
                    sataExpress: "0",
                    onboardEthernet: "",
                    onboardUsb3: false,
                },
                memory: {
                    memoryType: "",
                    speed: "",
                    size: "",
                    pricePerGb: "0",
                    casLatency: "0",
                    timing: "",
                    voltage: "",
                    heatSpreader: false,
                    ecc: false,
                    registered: false,
                    color: "",
                },
                storage: {
                    capacity: "0",
                    interface: "",
                    cache: "",
                    rpm: "0",
                    formFactor: "",
                },
                psu: {
                    psuType: "",
                    wattage: "0",
                    fans: "0",
                    modular: "",
                    output: "",
                    efficiencyCert: "",
                    pcieConnector: "0",
                },
                gpu: {
                    interface: "",
                    chipset: "",
                    memorySize: "",
                    memoryType: "",
                    coreClock: "",
                    boostClock: "",
                    tdp: "",
                    fan: false,
                    sliSupport: false,
                    crossFireSupport: false,
                    sizeLength: "",
                    dviDualLink: "",
                    hdmi: "",
                    vga: "",
                    displayPort: "",
                },
                casing: {
                    caseType: "",
                    color: "",
                    includePowerSupply: false,
                    external35Bays: "",
                    internal35Bays: "",
                    internal25Bays: "",
                    external25Bays: "",
                    internal525Bays: "",
                    external525Bays: "",
                    motherboardCompatibility: "",
                    frontUsb3ports: false,
                    maximumVideoCardLength: "",
                    width: "",
                    sizeLength: "",
                    height: "",
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
            },
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
                };
                this.cpucooler=  {
                    socket: "",
                    liquidCooled: Boolean,
                    bearingType: "",
                    minNoiseLevel: 0,
                    maxNoiseLevel: 0,
                    minFan: 0,
                    maxFan: 0,
                    height: 0,
                },
                this.motherboard = {
                    formFactor: "",
                    socket: "",
                    chipset: "",
                    memorySlot: "",
                    memoryType: "",
                    maximumSupportedMemory: "0",
                    raidSupport: false,
                    onboardVideo: false,
                    crossFireSupport: false,
                    sliSupport: "",
                    sata6gb: "0",
                    sataExpress: "0",
                    onboardEthernet: String,
                    onboardUsb3: false,
                }
                this.memory= {
                    memoryType: "0",
                    speed: "",
                    size: "",
                    pricePerGb: "0",
                    casLatency: "0",
                    timing: "",
                    voltage: "",
                    heatSpreader: false,
                    ecc: false,
                    registered: false,
                    color: "",
                }

                this.storage= {
                    capacity: "0",
                    interface: "",
                    cache: "",
                    rpm: "0",
                    formFactor: "",
                }

                this.psu = {
                    psuType: "",
                    wattage: "0",
                    fans: "0",
                    modular: "",
                    output: "",
                    efficiencyCert: "",
                    pcieConnector: "0",
                };

                this.gpu = {
                    interface: "",
                    chipset: "",
                    memorySize: "0",
                    memoryType: "",
                    coreClock: "0",
                    boostClock: "0",
                    tdp: "0",
                    fan: false,
                    sliSupport: false,
                    crossFireSupport: false,
                    sizeLength: "0",
                    dviDualLink: "0",
                    hdmi: "0",
                    vga: "0",
                    displayPort: "0",
                };

                this.casing = {
                    caseType: "",
                    color: "",
                    includePowerSupply: false,
                    external35Bays: "",
                    internal35Bays: "",
                    internal25Bays: "",
                    external25Bays: "",
                    internal525Bays: "",
                    external525Bays: "",
                    motherboardCompatibility: "",
                    frontUsb3ports: false,
                    maximumVideoCardLength: "",
                    width: "",
                    sizeLength: "",
                    height: "",
                };
            },
            create() {
                let p = new Product();

                if (this.type === "Cpu") {
                    p = new Cpu();
                    this.specificParse = this.cpu;
                }

                if (this.type === "Cpucooler") {
                    p = new Cpucooler();
                    this.specificParse = this.cpucooler;
                }

                if (this.type === "Motherboard") {
                    p = new Motherboard();
                    this.specificParse = this.motherboard;
                }

                if (this.type === "Memory") {
                    p = new Memory();
                    this.specificParse = this.memory;
                }

                if (this.type === "Storage") {
                    p = new Storage();
                    this.specificParse = this.storage;
                }

                if (this.type === "Gpu") {
                    p = new Gpu();
                    this.specificParse = this.gpu;
                }

                if (this.type === "Psu") {
                    p = new Psu();
                    this.specificParse = this.psu;
                }

                if (this.type === "Case") {
                    p = new Case();
                    this.specificParse = this.casing;
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
            addManu() {
                let manu = new Manufacturer();
                manu.callMethod("create", this.manufacturerName, (err, res)=> {
                    if (err) {
                        return this.$snackbar.run('Error during upload: ' + err.reason, ()=> {}, "OK", "error");
                    } 

                    this.tellChangeManufacturer = res;
                    this.manufacturerName = "";
                    this.showAddManufacturer = false;
                    return this.$snackbar.run('Successfully add new manufacturer ');
                    
                }) 
            }
        },
        meteor: {
            subscribe: {
                manufacturers: [],
                products: [],
            },
            manufacturers() {
                if (this.tellChangeManufacturer) {
                    setTimeout(()=> {
                        let newItem =Manufacturer.findOne(this.tellChangeManufacturer);
                        this.parse.manufacturerId = newItem._id;
                        this.tellChangeManufacturer = "";
                    }, 500)
                }
                return Manufacturer.find({}, {sort: {name: 1}});
            },
        }
    }
</script>