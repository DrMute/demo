<script src="../../../contacts-test-master/contacts-test-master/routes/contacts.js"></script>
<template>
  <div class="col-sm-6 col-sm-offset-3">
      <h3>Add a new Contact</h3>

          <div class="row">
              <div class="form-group col-sm-6">
                  <label for="first_name" class="h4 text-heading strong">first_name</label>
                  <input type="text" v-model="contact.first_name"  class="form-control" id="first_name" placeholder="Enter first_name" required>
              </div>
               <div class="form-group col-sm-6">
                  <label for="last_name" class="h4 text-heading strong">last_name</label>
                  <input type="text" v-model="contact.last_name" class="form-control" id="last_name" placeholder="Enter last_name" required>
              </div>


              <div class="form-group col-sm-6">
                  <label for="email" class="h4 text-heading strong">Email</label>
                  <input type="email" v-model="contact.email" class="form-control" id="email" placeholder="Enter email" required>
              </div>
          </div>
          <div class="form-group">
              <label for="description" class="h4 text-heading strong">description</label>
              <textarea id="description"  v-model="contact.description"  class="form-control" rows="5" placeholder="Enter description" required></textarea>
          </div>
          <button   v-on:click="doSubmit" type="submit"   id="form-submit" class="btn btn-success btn-lg pull-right text-heading">Submit</button>
          <div id="msgSubmit"  v-show="show.isshow" class="h3 text-center">Contact Submitted!</div>
  </div>
</template>

<script>
    import Vue from 'vue'
export default {
   data () {
    return {
        contact: {
          first_name : '',
          last_name : '',
          email : '',
          description : ''
            },
         show:{isshow:false}
        }
    },
    methods:{
        doSubmit () {



             const formData = JSON.stringify(this.contact);
              const show=this.show;

            this.$http.post('http://localhost:8089/contacts',formData).then(function(data){

                if(data.status='200'){



                        Vue.set(show,'isshow',true);





                    setTimeout(function () {

                        Vue.set(show,'isshow',false);

                    }, 2000);
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
