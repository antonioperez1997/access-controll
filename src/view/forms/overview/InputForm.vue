<template>
  <BasicFormWrapper>
    <HorizontalFormStyleWrap>
      <sdCards title="Basic Inputs">
        <a-form
          name="input-form"
          :layout="formState.layout"
          :model="formState"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          labelAlign="left"
        >
          <a-form-item label="Text">
            <a-input
              v-model:value="formState.text"
              placeholder="input placeholder"
            />
          </a-form-item>
          <a-form-item label="Email Address">
            <a-input
              v-model:value="formState.emailAddress"
              placeholder="input placeholder"
            />
          </a-form-item>
          <a-form-item label="URL">
            <a-input
              v-model:value="formState.url"
              name="input-url"
              placeholder="https://strikingdash-vue-admin-dashboard-template"
            />
          </a-form-item>
          <a-form-item label="Phone">
            <a-input
              v-model:value="formState.phone"
              name="input-phone"
              placeholder="017123456789"
            />
          </a-form-item>
          <a-form-item label="Password">
            <a-input-password
              v-model:value="formState.password"
              placeholder="input placeholder"
            />
          </a-form-item>
          <a-form-item label="Number">
            <a-input-number
              v-model:value="formState.number"
              name="input-number"
              placeholder="12457485"
            />
          </a-form-item>
          <a-form-item label="Date">
            <a-date-picker name="input-date" v-model:value="formState.date" />
          </a-form-item>
          <a-form-item label="Month">
            <a-month-picker
              name="input-month"
              placeholder="Select month"
              v-model:value="formState.month"
            />
          </a-form-item>
          <a-form-item label="Time">
            <a-time-picker
              :default-value="dayjs('12:08:23', 'HH:mm:ss')"
              name="input-time"
              v-model:value="formState.time"
            />
          </a-form-item>
          <a-form-item label="Color">
            <div className="sDash_color-picker">
              <a-input
                :style="{ height: '55px' }"
                name="color"
                type="color"
                v-model:value="formState.color"
              />
            </div>
          </a-form-item>
        </a-form>
      </sdCards>
    </HorizontalFormStyleWrap>
  </BasicFormWrapper>
</template>

<script>
import { reactive, defineComponent } from "vue";
import { BasicFormWrapper } from "../../styled";
import { HorizontalFormStyleWrap } from "./Style";
import dayjs from "dayjs";
export default defineComponent({
  name: "InputForm",
  components: {
    BasicFormWrapper,
    HorizontalFormStyleWrap,
  },
  setup() {
    const formState = reactive({
      layout: "vertical",
      text: "Duran Clayton",
      emailAddress: "username@email.com",
      password: "123456",
      number: "124",
      date: "",
      month: "",
      time: "",
      color: "#5F63F2",
    });

    const labelCol = {
      md: 6,
      xs: 24,
    };
    const wrapperCol = {
      md: 18,
      xs: 24,
    };

    return {
      formState,
      labelCol,
      wrapperCol,
      dayjs
    };
  },
});
</script>
