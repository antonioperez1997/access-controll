<template>
  <sdPageHeader title="Invoice"
    ><template v-slot:buttons>
      <div class="page-header-actions">
        <sdCalendarButton />
        <sdExportButton />
        <sdShareButton />
        <sdButton size="small" type="primary">
          <sdFeatherIcons type="plus" size="14" />
          Add New
        </sdButton>
      </div>
    </template>
  </sdPageHeader>
  <Main>
    <a-row :gutter="15">
      <a-col :md="24">
        <sdCards headless>
          <InvoiceHeader>
            <a-row>
              <a-col :sm="12" :xs="24">
                <figure>
                  <img class="top-img" :src="require('@/static/img/Logo_Dark.svg')" alt="logo" />
                </figure>
              </a-col>
              <a-col :sm="12" :xs="24">
                <div>
                  <address class="invoice-info">
                    Admin Company <br />
                    795 Folsom Ave, Suite 600 <br />
                    San Francisco, CA 94107, USA <br />
                    Reg. number : 245000003513
                  </address>
                </div>
              </a-col>
            </a-row>
          </InvoiceHeader>
          <InvoiceLetterBox>
            <div class="invoice-letter-inner">
              <a-row align="middle">
                <a-col :lg="8" :xs="24">
                  <article class="invoice-author">
                    <sdHeading class="invoice-author__title" as="h3"> Invoice </sdHeading>
                    <p>No : #642678</p>
                    <p>Date : Jan 17, 2021</p>
                  </article>
                </a-col>
                <a-col :lg="8" :xs="24">
                  <div class="invoice-barcode">
                    <sdCards headless>
                      <img style="width: 100%" :src="require('@/static/img/barcode.png')" alt="barcode" />
                      <p>8364297359912267</p>
                    </sdCards>
                  </div>
                </a-col>
                <a-col :lg="8" :xs="24">
                  <address class="invoice-customer">
                    <sdHeading class="invoice-customer__title" as="h5"> Invoice To: </sdHeading>
                    <p>
                      Stanley Jones <br />
                      795 Folsom Ave, Suite 600 <br />
                      San Francisco, CA 94107, USA
                    </p>
                  </address>
                </a-col>
              </a-row>
            </div>
          </InvoiceLetterBox>

          <br />
          <br />
          <ProductTable>
            <div class="table-invoice table-responsive">
              <a-table :dataSource="invoiceTableData" :columns="invoiceTableColumns" :pagination="false" />
            </div>
          </ProductTable>

          <a-row justify="end">
            <a-col :xxl="4" :xl="5" :sm="8" :xs="14" :offset="rtl ? 0 : 10">
              <OrderSummary>
                <div class="invoice-summary-inner">
                  <ul class="summary-list">
                    <li>
                      <span class="summary-list-title">Subtotal :</span>
                      <span class="summary-list-text">{{ `$${497.32}` }}</span>
                    </li>
                    <li>
                      <span class="summary-list-title">Discount :</span>
                      <span class="summary-list-text">{{ `$${-20}` }}</span>
                    </li>
                    <li>
                      <span class="summary-list-title">Shipping Charge :</span>
                      <span class="summary-list-text">{{ `$${30}` }}</span>
                    </li>
                  </ul>
                  <sdHeading class="summary-total" as="h4">
                    <span class="summary-total-label">Total : </span>
                    <span class="summary-total-amount">{{ `$${507.32}` }}</span>
                  </sdHeading>
                </div>
              </OrderSummary>
            </a-col>
          </a-row>
          <a-row justify="end">
            <a-col :lg="12" :md="18" :sm="24" :offset="0">
              <InvoiceAction>
                <sdButton size="small" shape="round" type="default">
                  <sdFeatherIcons type="printer" size="14" />
                  <span>Print</span>
                </sdButton>
                <sdButton size="small" shape="round" type="default">
                  <sdFeatherIcons type="send" size="14" />
                  <span>Send Invoice</span>
                </sdButton>
                <sdButton size="small" shape="round" type="primary">
                  <sdFeatherIcons type="download" size="14" />
                  <span>Download</span>
                </sdButton>
              </InvoiceAction>
            </a-col>
          </a-row>
        </sdCards>
      </a-col>
    </a-row>
  </Main>
</template>
<script lang="jsx">
import { InvoiceHeader, InvoiceLetterBox, InvoiceAction, ProductTable, OrderSummary } from './Style';
import { Main } from '../../styled';
import { useStore } from 'vuex';
import { computed, defineComponent } from 'vue';

const Invoice = defineComponent({
  name: 'Invoice',
  components: { InvoiceHeader, InvoiceLetterBox, InvoiceAction, ProductTable, OrderSummary, Main },
  setup() {
    const { state } = useStore();
    const rtl = computed(() => state.themeLayout.rtlData);
    return {
      rtl,
      invoiceTableData: [
        {
          key: '1',
          row: '1',
          details: (
            <div>
              <div class="product-info">
                <sdHeading class="product-info-title" as="h6">
                  Fiber Base Chair
                </sdHeading>
                <ul class="info-list">
                  <li>
                    <span class="info-title">Size :</span>
                    <span>Large</span>
                  </li>
                  <li>
                    <span class="info-title"> Color :</span>
                    <span>Brown</span>
                  </li>
                </ul>
              </div>
            </div>
          ),
          unit: <span class="product-unit">$248.66</span>,
          quantity: <span class="product-quantity">3</span>,
          total: <span class="product-total-price">$943.30</span>,
        },
        {
          key: '2',
          row: '2',
          details: (
            <div>
              <div class="product-info">
                <sdHeading class="product-info-title" as="h6">
                  Panton Tunior Chair
                </sdHeading>
                <ul class="info-list">
                  <li>
                    <span class="info-title">Size :</span>
                    <span>Large</span>
                  </li>
                  <li>
                    <span class="info-title"> Color :</span>
                    <span>Brown</span>
                  </li>
                </ul>
              </div>
            </div>
          ),
          unit: <span class="product-unit">$248.66</span>,
          quantity: <span class="product-quantity">2</span>,
          total: <span class="product-total-price">$943.30</span>,
        },
      ],
      invoiceTableColumns: [
        {
          title: '#',
          dataIndex: 'row',
          key: 'row',
        },
        {
          title: 'Product Details',
          dataIndex: 'details',
          key: 'details',
        },
        {
          title: 'Price Per Unit',
          dataIndex: 'unit',
          key: 'unit',
        },
        {
          title: 'Quantity',
          dataIndex: 'quantity',
          key: 'quantity',
        },
        {
          title: 'Order Total',
          dataIndex: 'total',
          key: 'total',
        },
      ],
    };
  },
});

export default Invoice;
</script>
