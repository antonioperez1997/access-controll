<template>
  <WizardWrapper>
    <Steps
      isSwitch
      :current="0"
      :status="status"
      :steps="steps"
      @onNext="next"
      @onPrev="prev"
      @onDone="done"
      :isFinished="isFinished"
    >
      <template #account>
        <BasicFormWrapper class="basic-form-inner">
          <div class="atbd-form-checkout">
            <a-row justify="center">
              <a-col :sm="22" :xs="24">
                <div class="create-account-form">
                  <sdHeading as="h4">1. Please Create Your Account</sdHeading>

                  <a-form
                    :model="stateAccount"
                    @finish="handleAccountSubmit"
                    name="account"
                    layout="vertical"
                  >
                    <a-form-item name="username" label="Username">
                      <a-input
                        v-model:value="stateAccount.username"
                        placeholder="Username"
                      />
                    </a-form-item>
                    <a-form-item name="email" label="Email Address">
                      <a-input
                        type="email"
                        v-model:value="stateAccount.email"
                        placeholder="name@gmail.com"
                      />
                    </a-form-item>
                    <a-form-item class="d" name="password" label="Password">
                      <a-input
                        type="password"
                        v-model:value="stateAccount.password"
                        placeholder="Password"
                      />
                      <span class="input-message"
                        >Enter a valid password. Min 6 characters long</span
                      >
                    </a-form-item>
                  </a-form>
                </div>
              </a-col>
            </a-row>
          </div>
        </BasicFormWrapper>
      </template>
      <template #address>
        <BasicFormWrapper class="basic-form-inner">
          <div class="atbd-form-checkout">
            <a-row justify="center">
              <a-col :sm="22" :xs="24">
                <div class="create-account-form">
                  <sdHeading as="h4"
                    >2. Please Fill in Your Shipping Address</sdHeading
                  >
                  <a-form
                    @finish="handleAddressSubmit"
                    :model="stateAddress"
                    name="address"
                    layout="vertical"
                  >
                    <a-form-item name="name" label="Contact Name">
                      <a-input
                        v-model:value="stateAddress.name"
                        placeholder="Ibn adam"
                      />
                    </a-form-item>
                    <a-form-item name="company">
                      <template #label
                        ><span>
                          Company Name <span>(Optional)</span>
                        </span></template
                      >
                      <a-input
                        v-model:value="stateAddress.company"
                        placeholder="adam"
                      />
                    </a-form-item>
                    <a-form-item name="phone" label="Phone Number">
                      <a-input
                        v-model:value="stateAddress.phone"
                        placeholder="+880"
                      />
                    </a-form-item>
                    <a-form-item name="country" label="Country/Region">
                      <a-select
                        v-model:value="stateAddress.country"
                        :style="{ width: '100%' }"
                      >
                        <a-select-option value=""
                          >Please Select</a-select-option
                        >
                        <a-select-option value="bangladesh"
                          >Bangladesh</a-select-option
                        >
                        <a-select-option value="india">India</a-select-option>
                      </a-select>
                    </a-form-item>
                    <a-form-item name="street" label="Street Address">
                      <a-input
                        v-model:value="stateAddress.street"
                        placeholder="House Number and Street Name"
                      />
                    </a-form-item>
                    <a-form-item name="street2" label="">
                      <a-input
                        v-model:value="stateAddress.street2"
                        placeholder="Apartment, Suite, Unit etc."
                      />
                    </a-form-item>
                    <a-form-item name="city" label="City">
                      <a-input
                        v-model:value="stateAddress.city"
                        placeholder="Enter City"
                      />
                    </a-form-item>
                    <a-form-item name="zip" label="Zip/Postal Code">
                      <a-input
                        v-model:value="stateAddress.zip"
                        placeholder="Enter Zip"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-col>
            </a-row>
          </div>
        </BasicFormWrapper>
      </template>
      <template #method>
        <BasicFormWrapper class="basic-form-inner">
          <div class="atbd-form-checkout">
            <a-row justify="center">
              <a-col :sm="22" :xs="24">
                <div class="payment-method-form">
                  <sdHeading as="h4"
                    >3. Please Please Select Your Payment Method</sdHeading
                  >
                  <div class="shipping-selection">
                    <a-radio-group :style="{ width: '100%' }">
                      <div class="shipping-selection__card">
                        <a-radio :style="{ width: '100%' }" value="card">
                          <sdCards
                            headless
                            :bodyStyle="{
                              backgroundColor: '#F8F9FB',
                              borderRadius: '20px',
                              border: '1px solid #F1F2F6',
                            }"
                          >
                            <div class="supported-card d-flex">
                              <span>Credit/Debit Card</span>
                              <div class="supported-card_logos">
                                <img
                                  :style="{ width: '50px' }"
                                  :src="
                                    require('@/static/img/cards-logo/ms.png')
                                  "
                                  alt=""
                                />
                                <img
                                  :style="{ width: '50px' }"
                                  :src="
                                    require('@/static/img/cards-logo/american-express.png')
                                  "
                                  alt=""
                                />
                                <img
                                  :style="{ width: '50px' }"
                                  :src="
                                    require('@/static/img/cards-logo/visa.png')
                                  "
                                  alt=""
                                />
                              </div>
                            </div>
                            <sdCards headless :style="{ marginBottom: 0 }">
                              <a-form
                                name="info"
                                layout="vertical"
                              >
                                <a-form-item name="number" label="Card Number">
                                  <a-input placeholder="6547-8702-6987-2527" />
                                </a-form-item>
                                <a-form-item name="name" label="Name on Card">
                                  <a-input placeholder="Full name" />
                                </a-form-item>
                                <a-form-item
                                  name="month"
                                  initialValue=""
                                  label="Expiration Date"
                                >
                                  <a-select :style="{ width: '100%' }">
                                    <a-select-option value=""
                                      >MM</a-select-option
                                    >

                                    <a-select-option
                                      v-for="value in month"
                                      :key="value"
                                      :value="value"
                                    >
                                      {{ value }}
                                    </a-select-option>
                                  </a-select>
                                </a-form-item>
                                <a-form-item name="year">
                                  <a-select :style="{ width: '100%' }">
                                    <a-select-option value=""
                                      >YY</a-select-option
                                    >
                                    <a-select-option
                                      :value="new Date().getFullYear()"
                                      >{{
                                        new Date().getFullYear()
                                      }}</a-select-option
                                    >

                                    <a-select-option
                                      v-for="value in month"
                                      :key="value"
                                      :value="
                                        parseInt(new Date().getFullYear(), 10) +
                                        parseInt(value, 10)
                                      "
                                    >
                                      {{
                                        parseInt(new Date().getFullYear(), 10) +
                                        parseInt(value, 10)
                                      }}
                                    </a-select-option>
                                  </a-select>
                                </a-form-item>
                                <a-form-item name="cvv" label="CVV">
                                  <div class="cvv-wrap">
                                    <a-input
                                      :style="{ width: '60%' }"
                                      placeholder="XXX"
                                    />
                                    <a class="input-leftText" to="#">
                                      What is this?
                                    </a>
                                  </div>
                                </a-form-item>
                              </a-form>
                            </sdCards>
                          </sdCards>
                        </a-radio>
                      </div>
                      <div class="shipping-selection__paypal">
                        <a-radio value="payPal" :style="{ width: '100%' }">
                          Pay With PayPal
                          <img
                            :src="require('@/static/img/PayPalLogo.png')"
                            alt="paypal"
                          />
                        </a-radio>
                      </div>
                      <div class="shipping-selection__cash">
                        <a-radio value="cash" :style="{ width: '100%' }">
                          Cash on delivery
                        </a-radio>
                      </div>
                    </a-radio-group>
                  </div>
                </div>
              </a-col>
            </a-row>
          </div>
        </BasicFormWrapper>
      </template>
      <template #review>
        <BasicFormWrapper v-if="status !== 'finish'" :style="{ width: '100%' }">
          <div class="atbd-review-order" :style="{ width: '100%' }">
            <sdHeading as="h4">4. Review and confirm Order</sdHeading>
            <sdCards
              :bodyStyle="{ backgroundColor: '#F8F9FB', borderRadius: 10 }"
              headless
            >
              <div class="atbd-review-order__single">
                <sdCards headless>
                  <div class="atbd-review-order__shippingTitle">
                    <sdHeading as="h5">
                      Shipping Information
                      <a to="#">
                        <sdFeatherIcons type="edit" />
                        Edit
                      </a>
                    </sdHeading>
                  </div>
                  <article class="atbd-review-order__shippingInfo">
                    <a-radio-group :style="{ width: '100%' }">
                      <a-radio value="ms" :style="{ width: '100%' }">
                        <div class="shipping-info-text">
                          <sdHeading as="h6">Ibn Adam</sdHeading>
                          <sdHeading as="h6">Phone: +61412345678</sdHeading>
                          <p>
                            795 Folsom Ave, Suite 600 <br />
                            San Francisco, CA 94107 <br />
                            United States
                          </p>
                        </div>
                      </a-radio>
                    </a-radio-group>
                    <a class="btn-addNew" to="#"> + Add New Address </a>
                  </article>
                </sdCards>
              </div>
              <div class="atbd-review-order__single">
                <sdCards headless>
                  <div>
                    <sdHeading as="h5">Payment Method</sdHeading>
                  </div>
                  <a-radio-group :style="{ width: '100%' }">
                    <a-radio value="ms" :style="{ width: '100%' }">
                      <div class="method-info">
                        <img :src="require('@/static/img/ms.svg')" alt="" />
                        **** **** **** 2597
                      </div>
                    </a-radio>
                  </a-radio-group>
                  <a class="btn-addCard" to="#"> + Add New Card </a>
                </sdCards>
              </div>

              <div class="atbd-review-order__single">
                <sdCards headless>
                  <ProductTable>
                    <div class="table-cart table-responsive">
                      <a-table
                        :pagination="false"
                        :dataSource="dataSource"
                        :columns="columns"
                      />
                    </div>
                  </ProductTable>

                  <a-row justify="end">
                    <a-col
                      :xxl="8"
                      :xl="5"
                      :md="9"
                      :sm="14"
                      :xs="24"
                      :offset="!rtl ? 10 : 0"
                    >
                      <OrderSummary>
                        <div class="invoice-summary-inner">
                          <ul class="summary-list">
                            <li>
                              <span class="summary-list-title">Subtotal :</span>
                              <span class="summary-list-text">{{
                                `$${subtotal}`
                              }}</span>
                            </li>
                            <li>
                              <span class="summary-list-title">Discount :</span>
                              <span class="summary-list-text">{{
                                `$${-20}`
                              }}</span>
                            </li>
                            <li>
                              <span class="summary-list-title"
                                >Shipping Charge :</span
                              >
                              <span class="summary-list-text">{{
                                `$${30}`
                              }}</span>
                            </li>
                          </ul>
                          <sdHeading class="summary-total" as="h4">
                            <span class="summary-total-label">Total : </span>
                            <span class="summary-total-amount">{{
                              `$${subtotal + 30 - 20}`
                            }}</span>
                          </sdHeading>
                        </div>
                      </OrderSummary>
                    </a-col>
                  </a-row>
                </sdCards>
              </div>
            </sdCards>
          </div>
        </BasicFormWrapper>

        <a-row v-else justify="start" :style="{ width: '100%' }">
          <a-col :xl="20" :xs="24">
            <div class="checkout-successful">
              <sdCards
                headless
                :bodyStyle="{
                  backgroundColor: '#F8F9FB',
                  borderRadius: '20px',
                }"
              >
                <sdCards headless>
                  <span class="icon-success">
                    <sdFeatherIcons type="check" />
                  </span>
                  <sdHeading as="h3">Payment Successful</sdHeading>
                  <p>Thank you! We have received your Payment</p>
                </sdCards>
              </sdCards>
            </div>
          </a-col>
        </a-row>
      </template>
    </Steps>
  </WizardWrapper>
</template>
<script lang="jsx">
import {
  FigureWizards,
  WizardWrapper,
  ProductTable,
  OrderSummary,
} from "../Style";
import { BasicFormWrapper } from "../../styled";
import Steps from "@/components/steps/steps";
import { useStore } from "vuex";
import { computed, onMounted, ref, watchEffect, reactive } from "vue";
import {
  PlusOutlined,
  MinusOutlined,
  DeleteOutlined,
} from "@ant-design/icons-vue";

const month = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
const columns = [
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
];

const WizardsOne = {
  name: "WizardsOne",
  components: {
    Steps,
    FigureWizards,
    WizardWrapper,
    BasicFormWrapper,
    ProductTable,
    OrderSummary,
    PlusOutlined,
    MinusOutlined,
  },
  setup() {
    const { state, dispatch } = useStore();
    const cartData = computed(() => state.cart.data);
    const isLoading = computed(() => state.cart.loading);
    const rtl = computed(() => state.themeLayout.rtlData);
    const status = ref("process");
    const isFinished = ref(false);
    const current = ref(1);
    onMounted(() => {
      dispatch("cartGetData");
    });

    const stateAccount = reactive({
      username: "",
      email: "",
      password: "",
    });

    const stateAddress = reactive({
      name: "",
      company: "",
      street: "",
      street2: "",
      country: "",
      city: "",
      phone: "",
      zip: "",
    });

    const handleAccountSubmit = (values) => {
      console.log(values);
    };

    const handleAddressSubmit = (values) => {
      console.log(values);
    };

    const incrementUpdate = (id, quantity) => {
      const data = parseInt(quantity, 10) + 1;
      dispatch("cartUpdateQuantity", {
        id,
        quantity: data,
        cartData: cartData.value,
      });
    };

    const decrementUpdate = (id, quantity) => {
      const data = parseInt(quantity, 10) >= 2 ? parseInt(quantity, 10) - 1 : 1;
      dispatch("cartUpdateQuantity", {
        id,
        quantity: data,
        cartData: cartData.value,
      });
    };

    const cartDeleted = (id) => {
      const confirm = window.confirm("Are you sure to delete this product?");
      if (confirm) dispatch("cartDelete", { id, cartData: cartData.value });
    };

    const next = () => {
      status.value = "process";
      current.value = current.value + 1;
    };

    const prev = () => {
      status.value = "process";
      current.value = current.value - 1;
    };

    const done = () => {
      const confirm = window.confirm("Are sure to submit order?");
      if (confirm) {
        status.value = "finish";
        isFinished.value = true;
        current.value = 0;
      }
    };

    let subtotal = ref(0);
    const dataSource = computed(() => {
      subtotal.value = 0;
      return (
        cartData.value !== null &&
        cartData.value.map((data) => {
          const { id, img, name, quantity, price, size, color } = data;
          subtotal.value += parseInt(quantity, 10) * parseInt(price, 10);
          return {
            key: id,
            product: (
              <div class="cart-single">
                <FigureWizards>
                  <img style={{ width: 80 }} src={require(`@/${img}`)} alt="" />
                  <figcaption>
                    <div class="cart-single__info">
                      <sdHeading as="h6">{name}</sdHeading>
                      <ul class="info-list">
                        <li>
                          <span class="info-title">Size :</span>
                          <span>{size}</span>
                        </li>
                        <li>
                          <span class="info-title"> Color :</span>
                          <span>{color}</span>
                        </li>
                      </ul>
                    </div>
                  </figcaption>
                </FigureWizards>
              </div>
            ),
            price: <span class="cart-single-price">${price}</span>,
            quantity: (
              <div class="cart-single-quantity">
                <sdButton
                  onClick={() => decrementUpdate(id, quantity)}
                  class="btn-dec"
                  type="default"
                >
                  <MinusOutlined />
                </sdButton>
                {quantity}
                <sdButton
                  onClick={() => incrementUpdate(id, quantity)}
                  class="btn-inc"
                  type="default"
                >
                  <PlusOutlined />
                </sdButton>
              </div>
            ),
            total: <span class="cart-single-t-price">${quantity * price}</span>,
            action: (
              <div class="table-action">
                <sdButton
                  onClick={() => cartDeleted(id)}
                  class="btn-icon"
                  to="#"
                  size="default"
                  type="danger"
                  shape="circle"
                  transparented
                >
                  <DeleteOutlined />
                </sdButton>
              </div>
            ),
          };
        })
      );
    });

    watchEffect(() => {
      const activeElement = document.querySelectorAll(".ant-steps-item-active");
      const successElement = document.querySelectorAll(
        ".ant-steps-item-finish"
      );

      activeElement.forEach((element) => {
        if (element.previousSibling) {
          const bgImage = element.previousSibling;
          if (bgImage.classList.contains("success-step-item")) {
            bgImage.classList.remove("success-step-item");
          } else {
            bgImage.classList.remove("wizard-step-item");
          }
          bgImage.classList.add("wizard-steps-item-active");
        }
      });

      successElement.forEach((element) => {
        if (element.previousSibling) {
          const bgImage = element.previousSibling;
          bgImage.classList.remove("wizard-steps-item-active");
          bgImage.classList.add("success-step-item");
        }
      });
    });

    return {
      done,
      prev,
      next,
      month,
      columns,
      cartData,
      isLoading,
      rtl,
      status,
      isFinished,
      current,
      dataSource,
      steps: [
        {
          title: "Create Account",
          content: "account",
        },
        {
          title: "Shipping Address",
          content: "address",
        },
        {
          title: "Payment Method",
          content: "method",
        },
        {
          title: "Review Order",
          content: "review",
        },
      ],
      handleAccountSubmit,
      handleAddressSubmit,
      stateAccount,
      stateAddress,
      subtotal,
    };
  },
};

export default WizardsOne;
</script>
