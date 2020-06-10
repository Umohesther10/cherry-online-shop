<template>
  <div class="container">
    <b-row>
      <b-col cols="6">
        <strong>
          <h1 style="color: #f68b1e; font-size: 20px; text-align: center; padding:20px;">Login</h1>
        </strong>
        <b-row>
          <b-col cols="2"></b-col>
          <b-col cols="9">
            <div id="merge" class="form-group">
              <label for="exampleInputEmail1">
                Email
                <strong style="color: red">*</strong>
              </label>
              <input type="text" class="form-control" v-model="email" required />
            </div>
            <div id="merge" class="form-group">
              <label for="exampleInputEmail1">
                Password
                <strong style="color: red">*</strong>
              </label>
              <input type="text" class="form-control" v-model="password" required />
            </div>
            <input type="checkbox" />
            <span>Remember me</span>
            <a style="cursor: pointer; text-decoration-color: #f68b1e " href="#">
              <span style="padding: 60px; color: #f68b1e; ">Forgot password?</span>
            </a>

            <b-row>
            <b-col cols="12">
              <b-button href="#" block id="style" @click="login">
                <h6><i class="fas fa-envelope"></i>LOG IN</h6>
              </b-button>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <b-button href="#" block id="style1">
                <h6>LOGIN WITH FACEBOOK</h6>
              </b-button>
            </b-col>
          </b-row>
          </b-col>
          <b-col cols="1"></b-col>
        </b-row>
      </b-col>
      <b-col cols="6">
        <strong>
          <h1
            style="color: #f68b1e; font-size: 20px; text-align: center; padding:20px;"
          >Create your Cherry Account for free</h1>
        </strong>
        <b-row>
          <b-col cols="2"></b-col>
          <b-col cols="9">
            <div class="wrap">
              <p
                style="padding:10px;"
              >Create your Cherry customer account in just a few clicks! You can register either using your e-mail address or through your Facebook account.</p>
            </div>
            <b-row>
            <b-col cols="12">
              <b-button href="/signup" block id="style">
                <h6><div style="float: left;"><i class="fas fa-envelope"></i></div> AN ACCOUNT</h6>
              </b-button>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <b-button href="https://www.facebook.com/" block id="style1">
                <h6>REGISTER WITH FACEBOOK</h6>
              </b-button>
            </b-col>
          </b-row>
          </b-col>
          <b-col cols="1"></b-col>
          
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Login",
    data(){
      return{
        email: "",
        password: "",
      }
    },

    methods: {
    login() {
      axios
        .post("http://localhost:5000/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response);
        });
     
      this.email = "";
      this.password = "";
    }
  }



    
}
</script>
<style scoped>
.container {
  margin-top: 100px;
}

#style {
  margin-top: 24px;
  background-color: #f68b1e;
  height: 45px;
  border-radius: 5px;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;
  padding: 12px 16px;
  font-weight: 500;
  outline-color: none;
  outline: none;
  border: none;
}
#style1 {
  margin-top: 24px;
  background-color: #405888;
  height: 45px;
  border-radius: 5px;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;
  padding: 12px 16px;
  font-weight: 500;
  outline-color: none;
  outline: none;
  border: none;
}
.wrap{
    margin-bottom:100px
}

</style>