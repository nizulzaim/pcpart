<template>
    <data-table class="sortable" style="box-shadow: none">
        <table>
            <thead>
                <tr>
                    <th class="unsortable"></th>
                    <th class="">CPU</th>
                    <th>Speed</th>
                    <th>Cores</th>
                    <th>TDP (W)</th>
                    <th>Price</th>
                    <!--<th class="th-action unsortable"></th>-->
                </tr>
            </thead>
            <tbody>
                <tr v-for="v in value" style="cursor: pointer">
                    <td></td>
                    <td @click="goTo(v._id)">{{v.manufacturer().name}} {{v.name}}</td>
                    <td @click="goTo(v._id)">{{v.operatingFrequency}} GHz</td>
                    <td @click="goTo(v._id)">{{v.cores}}</td>
                    <td @click="goTo(v._id)">{{v.thermalDesignPower}} W</td>
                    <td @click="goTo(v._id)"></td>
                    <!--<td v-text="getLocation(trip.departLocation).name"></td>
                    <td v-text="getLocation(trip.price[trip.price.length - 1].arrivalLocation).name"></td>
                    <td>{{trip.createdAt | moment("Do MMMM YYYY, HH:mm")}}</td>
                    <td class="td-number" v-text="trip.availableSeat"></td>
                    <td class="td-action">
                        <tooltip text="View Trip">
                            <icon-button @click="showArrivalPlacesModal(trip._id)" name="bus" v-ripple trigger-tooltip class="color-green-900"></icon-button>
                        </tooltip>
                        <tooltip text="View Tickets">
                            <icon-button  name="ticket-confirmation" v-ripple trigger-tooltip class="color-primary-900"></icon-button>
                        </tooltip>
                    </td>-->
                </tr>
                <tr v-if="!$subReady">
                    <td colspan="100"  class="font-center">Loading</td>
                </tr>
                <tr v-if="$subReady && !value">
                    <td colspan="100" class="font-center">No Data</td>
                </tr>
            </tbody>
        </table>
    </data-table>
</template>

<script>
    export default {
        props: {
            value: Array,
        },
        methods: {
            goTo(id) {
                this.$router.push("/product/details/" + id);
            }
        }
    }
</script>