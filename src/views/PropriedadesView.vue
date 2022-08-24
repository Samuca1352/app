<template>
    <v-container grid-list-sm >


        <div class="text-h5 mt-2">
            Propriedades
        </div>
        <v-row class="mt-4" justify="space-between">
            <v-col cols="12" sm="12" md="5">
                <v-text-field variant="solo" label="Pesquisa por nome ou codigo"></v-text-field>
            </v-col>
            <v-col cols="12" sm="8" md="5" >
            <v-btn class="flex-row-reverse" color="info" 
             density="comfortable" to="/propriedades/incluir" text="Incluir Propriedade"></v-btn>
            </v-col>
        </v-row>


        
        
            <v-table>
                <thead>
                    <tr>
                        <th class="text-left">

                        </th>
                        
                        <th class="text-left">
                            Plantações
                        </th>
                        <th class="text-left">
                            Lotes
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in desserts" :key="item.lotes" height="5px">
                        <td>
                            <v-checkbox type="checkbox" 
                             hide-details ></v-checkbox>
                        </td>
                        <td>{{ item.plant }}</td>
                        <td>{{ item.lotes }}</td>
                    </tr>
                </tbody>
            </v-table>
       
       


    </v-container>
</template>

<script>
export default {
    data() {
        return {
            
            desserts: [
                {
                    plant: 'Plantio Área 1',
                    lotes: 'Lote 25',
                },
                {
                    plant: 'Plantio Área 1',
                    lotes: 'Lote 30',
                },
                {
                    plant: 'Plantio Área 2',
                    lotes: 'Lote 38',
                },
                {
                    plant: 'Plantio Área 2',
                    lotes: 'Lote 90',
                },
                {
                    plant: 'Plantio Área 1',
                    lotes: 'Lote 20',
                },
                {
                    plant: 'Plantio Área 1',
                    lotes: 'Lote 26',
                },


            ],
        }
    },
}
</script>

<style>
@media screen and (min-width: 900px) {
    td{
        font-size: 20px;
    }
}
</style>