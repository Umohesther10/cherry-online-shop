<template>
  <div class="container">
    <b-row>
      <b-col cols="2"></b-col>
      <b-col cols="8">
        <div class="space">
          <strong>
            <h1 style="color: #f68b1e; font-size: 20px;">Create Account</h1>
          </strong>
        </div>
        <b-row>
          <b-col cols="6">
            <div id="merge" class="form-group">
              <label for="exampleInputEmail1">
                First Name
                <strong style="color: red">*</strong>
              </label>
              <input type="text" class="form-control" v-model="firstName" required />
            </div>
          </b-col>
          <b-col cols="6">
            <div id="merge" class="form-group">
              <label for="exampleInputEmail1">
                Last Name
                <strong style="color: red">*</strong>
              </label>
              <input type="text" class="form-control" v-model="lastName" required />
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <div id="merge" class="form-group">
              <label for="exampleInputEmail1">
                E-mail
                <strong style="color: red">*</strong>
              </label>
              <input type="text" class="form-control" v-model="email" required />
            </div>
          </b-col>
          <b-col cols="6">
            <div id="merge" class="form-group">
              <label for="exampleInputEmail1">
                Password
                <strong style="color: red">*</strong>
              </label>
              <input type="password" class="form-control" v-model="password" required />
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
             <div id="merge" class="form-group">
              <label for="exampleInputEmail1">
                Phone Number
                <strong style="color: red">*</strong>
              </label>
              <input type="tel" class="form-control" v-model="phone" required />
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
             <b-button block id="style"><h6>CREATE ACCOUNT</h6></b-button>

          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
             <b-button href="www.facebook.com" block id="style1"><h6>REGISTER WITH FACEBOOK</h6></b-button>

          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2"></b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "SignUp"
};
</script>
<style scoped>
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

div.col-8{
  padding: 0px;
}
h1 {
  margin: 0px;
}

#merge {
  margin: 10px;
}

</style>