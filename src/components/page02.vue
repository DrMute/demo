<template>
 <div class="col-sm-6 col-sm-offset-3">
     <h3>Contacts</h3>
 <table class="table table-hover table-bordered">
  <thead>
   <tr>
   <th width="20%">first_name</th>
   <th width="20%">last_name</th>
   <th width="20%">email</th>
   <th width="40%">description</th>
   <th width="20%">action</th>
   </tr>
  </thead>
  <tbody>
   <tr v-for="(item, index) in people">
   <td >{{ item.first_name }}</td>
   <td >{{ item.last_name }}</td>
   <td >{{ item.email }}</td>
   <td >{{ item.description }}</td>
   <td ><button  id="form-submit"  v-on:click="delPerson(index,item.id)"  class="btn-warning ">delete</button></td>
   </tr>
  </tbody>
  <tfoot>
   <tr>
   <td colspan="5">
    <div class="pull-left">
    <!--<button class="btn btn-default"  v-on:click="refresh"    >刷新</button>-->
    </div>
    <div class="pull-right">

    </div>
   </td>
   </tr>
  </tfoot>
 </table>

 </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        data () {
            return {
                people:[]

            }
        },
        created () {



            this.$http.get('http://localhost:8089/contacts').then(function(data){

                if(data.status='200'){
                    this.people=data.body;
                    console.log(this.people);


                }

            }).catch(function(){
                console.log("服务器异常！");
            });



        },
        methods:{

            delPerson (index,id){

                // 删一个数组元素
                console.log(index);
                console.log(id);

                this.$http.delete("http://localhost:8089/contacts/"+id).then(function(data){
                    console.log(data);
                    if(data.status='200'){
                        this.people.splice(index,1);
                    }

                }).catch(function(){
                    console.log("服务器异常！");
                });








            }

        }
    }
</script>

<style scoped>
  @import '/static/css/bootstrap.css';
</style>
