<template>
  <TopMenuStyle>
    <div class="strikingDash-top-menu">
      <ul>
        <li class="has-subMenu">
          <a href="#" class="parent"> Dashboard </a>
          <ul class="subMenu">
            <li @click="addParentActive">
              <router-link to="/"> Social Media </router-link>
            </li>
            <li @click="addParentActive">
              <router-link :to="`/business`"> Business </router-link>
            </li>
            <li @click="addParentActive">
              <router-link :to="`/performance`"> Site Perfomence </router-link>
            </li>
            <li @click="addParentActive">
              <router-link :to="`/eco`"> Ecomerce </router-link>
            </li>
            <li @click="addParentActive">
              <router-link :to="`/crm`"> CRM </router-link>
            </li>
            <li @click="addParentActive">
              <router-link :to="`/sales`"> Sales Performance </router-link>
            </li>
          </ul>
        </li>

        <li class="has-subMenu">
          <a href="#" class="parent"> Crud </a>
          <ul class="subMenu">
            <li class="has-subMenu-left">
              <a href="#" class="parent">
                <sdFeatherIcons type="database" />
                Axios Crud
              </a>
              <ul class="subMenu">
                <li @click="addParentActive">
                  <router-link to="/crud/axios-view"> View All </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link to="/crud/axios-add"> Add New </router-link>
                </li>
              </ul>
            </li>
            <li class="has-subMenu-left">
              <a href="#" class="parent">
                <sdFeatherIcons type="database" />
                FireStore Crud
              </a>
              <ul class="subMenu">
                <li @click="addParentActive">
                  <router-link to="/crud/fireStore-view">
                    View All
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link to="/crud/fireStore-add"> Add New </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li class="has-subMenu">
          <a href="#" class="parent"> Apps </a>
          <ul class="subMenu">
            <li class="has-subMenu-left">
              <a href="#" class="parent">
                <sdFeatherIcons type="mail" />
                Email
              </a>
              <ul class="subMenu">
                <li @click="addParentActive">
                  <router-link to="/app/mail/inbox"> Inbox </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link to="/app/mail-single/1585118055048">
                    Read Email
                  </router-link>
                </li>
              </ul>
            </li>
            <li @click="addParentActive">
              <router-link to="/app/chat/private/rofiq@gmail.com">
                <sdFeatherIcons type="message-square" />
                Chat
              </router-link>
            </li>
            <li class="has-subMenu-left">
              <a href="#" class="parent">
                <sdFeatherIcons type="shopping-cart" />
                eComerce
              </a>
              <ul class="subMenu">
                <li @click="addParentActive">
                  <router-link to="/app/ecommerce/product/grid">
                    Products
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link to="/app/ecommerce/productDetails/1">
                    Products Details
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link to="/app/ecommerce/add-product">
                    Product Add
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link to="/app/ecommerce/edit-product">
                    Product Edit
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link to="/app/ecommerce/cart"> Cart </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link to="/app/ecommerce/orders"> Orders </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link to="/app/ecommerce/sellers">
                    Sellers
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link to="/app/ecommerce/Invoice">
                    Invoices
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="has-subMenu-left">
              <a href="#" class="parent">
                <sdFeatherIcons type="aperture" />
                Social App
              </a>
              <ul class="subMenu">
                <li @click="addParentActive">
                  <router-link :to="`/app/social/profile/overview`">
                    My Profile
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/app/social/profile/timeline`">
                    Timeline
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/app/social/profile/activity`">
                    Activity
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="has-subMenu-left">
              <a href="#" class="parent">
                <sdFeatherIcons type="target" />
                Project
              </a>
              <ul class="subMenu">
                <li @click="addParentActive">
                  <router-link :to="`/app/project/grid`">
                    Project Grid
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/app/project/list`">
                    Project List
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/app/project/create`">
                    Create Project
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/app/project/projectDetails/1`">
                    Project Details
                  </router-link>
                </li>
              </ul>
            </li>

            <li @click="addParentActive">
              <router-link :to="`/app/calendar/month`">
                <sdFeatherIcons type="calendar" />
                Calendar
              </router-link>
            </li>
            <li class="has-subMenu-left">
              <a href="#" class="parent">
                <sdFeatherIcons type="users" />
                Users
              </a>
              <ul class="subMenu">
                <li @click="addParentActive">
                  <router-link :to="`/app/users/team`"> Team </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/app/users/users/user-grid`">
                    Users Grid
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/app/users/users/user-list`">
                    Users List
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/app/users/users/grid-style`">
                    Users Grid Style
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/app/users/users/grid-group`">
                    Users Group
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/app/users/add-user/info`">
                    Add User
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/app/users/dataTable`">
                    User Table
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="has-subMenu-left">
              <a href="#" class="parent">
                <sdFeatherIcons type="user-plus" />
                Contacts
              </a>
              <ul class="subMenu">
                <li @click="addParentActive">
                  <router-link :to="`/app/contact/contact-create`"> Create Contact </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/app/contact/contact-grid`"> Contacts Grid </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/app/contact/contact-list`"> Contacts List </router-link>
                </li>
              </ul>
            </li>
            <li @click="addParentActive">
              <router-link :to="`/app/note/all`">
                <sdFeatherIcons type="file-text" />
                Note
              </router-link>
            </li>
            <li @click="addParentActive">
              <router-link :to="`/app/to-do/`">
                <sdFeatherIcons type="check-square" />
                To Do
              </router-link>
            </li>
            <li @click="addParentActive">
              <router-link :to="`/app/kanban`">
                <img
                  class="sDash_menu-item-icon"
                  :src="require('@/static/img/icon/columns.svg')"
                />
                Kanban Board
              </router-link>
            </li>
            <li @click="addParentActive">
              <router-link :to="`/app/task/all`">
                <sdFeatherIcons type="file" />
                Task
              </router-link>
            </li>
            <li class="has-subMenu-left">
              <a href="#" class="parent">
                <img
                  class="sDash_menu-item-icon"
                  :src="require('@/static/img/icon/repeat.svg')"
                />
                Import Export
              </a>
              <ul class="subMenu">
                <li @click="addParentActive">
                  <router-link :to="`/app/import`"> Import </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/app/export`"> Export </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li class="mega-item has-subMenu">
          <a href="#" class="parent"> Pages </a>
          <ul class="megaMenu-wrapper megaMenu-small">
            <li>
              <ul>
                <li @click="addParentActive">
                  <router-link :to="`/page/profile-settings`">
                    Settings
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/page/gallery`"> Gallery </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/page/pricing`"> Pricing </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/page/banners`"> Banners </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/page/testimonials`">
                    Testimonials
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/page/faqs`"> Faq`s </router-link>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li @click="addParentActive">
                  <router-link :to="`/page/search`">
                    Search Results
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/page/starter`"> Blank Page </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/page/maintenance`">
                    Maintenance
                  </router-link>
                </li>

                <li @click="addParentActive">
                  <router-link :to="`/page/404`"> 404 </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/page/comingSoon`">
                    Coming Soon
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/page/support`">
                    Support Center
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li @click="addParentActive">
                  <router-link :to="`/changelog`"> Changelog </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/page/knowledgebase/base/plugins`">
                    Knowledgebase
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/page/knowledgebase/all-articles`">
                    All Article
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/page/knowledgebase/single/1`">
                    Single Article
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="mega-item has-subMenu">
          <a href="#" class="parent"> Components </a>
          <ul class="megaMenu-wrapper megaMenu-wide">
            <li>
              <span class="mega-title">Components</span>
              <ul>
                <li @click="addParentActive">
                  <router-link :to="`/components/alerts`"> Alert </router-link>
                </li>

                <li @click="addParentActive">
                  <router-link :to="`/components/avatar`"> Avatar </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/badge`"> Badge </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/breadcrumb`">
                    Breadcrumb
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/button`">
                    Buttons
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/calendar`">
                    Calendar
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/cards`"> Card </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/carousel`">
                    Carousel
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/cascader`">
                    Cascader
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/checkbox`">
                    Checkbox
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/collapse`">
                    Collapse
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <span class="mega-title">Components</span>
              <ul>
                <li @click="addParentActive">
                  <router-link :to="`/components/comments`">
                    Comments
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/dash-base`">
                    Dashboard Base
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/datePicker`">
                    DataPicker
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/drag-drop`">
                    Drag & Drop
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/drawer`"> Drawer </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/dropdown`">
                    Dropdown
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/empty`"> Empty </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/grid`"> Grid </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/input`"> Input </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/list`"> List </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/menu`"> Menu </router-link>
                </li>
              </ul>
            </li>
            <li>
              <span class="mega-title">Components</span>
              <ul>
                <li @click="addParentActive">
                  <router-link :to="`/components/message`">
                    Message
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/modal`"> Modals </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/notification`">
                    Notifications
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/pageHeader`">
                    Page Headers
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/pagination`">
                    Pagination
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/popConfirm`">
                    PopConfirm
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/popover`">
                    PopOver
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/progressbar`">
                    Progress
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/radio`"> Radio </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/rate`"> Rate </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/result`"> Result </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/select`"> Select </router-link>
                </li>
              </ul>
            </li>
            <li>
              <span class="mega-title">Components</span>
              <ul>
                <li @click="addParentActive">
                  <router-link :to="`/components/skeleton`">
                    Skeleton
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/slider`"> Slider </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/spiner`"> Spiner </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/statistic`">
                    Statistics
                  </router-link>
                </li>

                <li @click="addParentActive">
                  <router-link :to="`/components/steps`"> Steps </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/switch`"> Switch </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/tabs`"> Tabs </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/tags`"> Tags </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/timeline`">
                    Timeline
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/time-picker`">
                    TimePicker
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/tree-select`">
                    Tree Select
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/components/upload`"> Upload </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="has-subMenu">
          <a href="#" class="parent"> Features </a>
          <ul class="subMenu">
            <li class="has-subMenu-left">
              <a href="#" class="parent">
                <sdFeatherIcons type="bar-chart-2" />
                Charts
              </a>
              <ul class="subMenu">
                <li @click="addParentActive">
                  <router-link :to="`/chart/chart-js`"> Chart Js </router-link>
                </li>
                <!-- <li>
                  <router-link :to="`/charts/google-chart`">Google Chart</router-link>
                </li> -->
                <li class="has-subMenu-left">
                  <a href="#">Apex Charts</a>
                  <ul class="subMenu">
                    <li @click="addParentActive">
                      <router-link :to="`/chart/column-chart`">
                        Column Charts
                      </router-link>
                    </li>
                    <li @click="addParentActive">
                      <router-link :to="`/chart/line-chart`">
                        Line Charts
                      </router-link>
                    </li>
                    <li @click="addParentActive">
                      <router-link :to="`/chart/area-chart`">
                        Area Charts
                      </router-link>
                    </li>
                    <li @click="addParentActive">
                      <router-link :to="`/chart/bar-chart`">
                        Bar Charts
                      </router-link>
                    </li>
                    <li @click="addParentActive">
                      <router-link :to="`/chart/pie-chart`">
                        Pie Charts
                      </router-link>
                    </li>
                    <li @click="addParentActive">
                      <router-link :to="`/chart/radar-charts`">
                        Radar Charts
                      </router-link>
                    </li>
                    <li @click="addParentActive">
                      <router-link :to="`/chart/radialbar-chart`">
                        Radialbar Charts
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="has-subMenu-left">
              <a href="#" class="parent">
                <sdFeatherIcons type="disc" />
                Form
              </a>
              <ul class="subMenu">
                <li @click="addParentActive">
                  <router-link :to="`/forms/form-layout`">
                    Form Layouts
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/forms/form-elements`">
                    Form Elements
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/forms/form-components`">
                    Form Components
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/forms/form-validation`">
                    Form Validation
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="has-subMenu-left">
              <a href="#" class="parent">
                <sdFeatherIcons type="cpu" />
                Tables
              </a>
              <ul class="subMenu">
                <li @click="addParentActive">
                  <router-link :to="`/tables/basic`"> Basic Table </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/tables/dataTable`">
                    Data Table
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="has-subMenu-left">
              <a href="#" class="parent">
                <sdFeatherIcons type="server" />
                Widgets
              </a>
              <ul class="subMenu">
                <li @click="addParentActive">
                  <router-link :to="`/widgets/chart`"> Chart </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/widgets/card`"> Card </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/widgets/mixed`"> Mixed </router-link>
                </li>
              </ul>
            </li>
            <li class="has-subMenu-left">
              <a href="#" class="parent">
                <sdFeatherIcons type="server" />
                Wizards
              </a>
              <ul class="subMenu">
                <li @click="addParentActive">
                  <router-link :to="`/wizard/wizard1`"> Wizard 1 </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/wizard/wizard2`"> Wizard 2 </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/wizard/wizard3`"> Wizard 3 </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/wizard/wizard4`"> Wizard 4 </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/wizard/wizard5`"> Wizard 5 </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/wizard/wizard6`"> Wizard 6 </router-link>
                </li>
              </ul>
            </li>
            <li class="has-subMenu-left">
              <a href="#" class="parent">
                <sdFeatherIcons type="grid" />
                Icons
              </a>
              <ul class="subMenu">
                <li @click="addParentActive">
                  <router-link :to="`/icons/featherIcons`">
                    Feather Icons(svg)
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/icons/fa`"> Font Awesome </router-link>
                </li>
              </ul>
            </li>

            <li class="has-subMenu-left">
              <a href="#" class="parent">
                <sdFeatherIcons type="map" />
                Maps
              </a>
              <ul class="subMenu">
                <li @click="addParentActive">
                  <router-link :to="`/maps/google`"> Google Maps </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/maps/leaflet`">
                    Leaflet Maps
                  </router-link>
                </li>
                <li @click="addParentActive">
                  <router-link :to="`/maps/Vector`"> Vector Maps </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </TopMenuStyle>
</template>
<script>
import { onMounted, defineComponent } from "vue";
import { TopMenuStyle } from "./style";

export default defineComponent({
  name: "TopMenu",
  components: {
    TopMenuStyle,
  },
  setup() {
    onMounted(() => {
      const active = document.querySelector(".strikingDash-top-menu a.active");
      const activeDefault = () => {
        const megaMenu = active.closest(".megaMenu-wrapper");
        const hasSubMenuLeft = active.closest(".has-subMenu-left");
        if (!megaMenu) {
          active.closest("ul").previousSibling.classList.add("active");
          if (hasSubMenuLeft)
            hasSubMenuLeft
              .closest("ul")
              .previousSibling.classList.add("active");
        } else {
          active
            .closest(".megaMenu-wrapper")
            .previousSibling.classList.add("active");
        }
      };
      window.addEventListener("load", active && activeDefault);
    });

    const addParentActive = (event) => {
      document.querySelectorAll(".parent").forEach((element) => {
        element.classList.remove("active");
      });

      const hasSubMenuLeft = event.currentTarget.closest(".has-subMenu-left");
      const megaMenu = event.currentTarget.closest(".megaMenu-wrapper");
      if (!megaMenu) {
        event.currentTarget
          .closest("ul")
          .previousSibling.classList.add("active");
        if (hasSubMenuLeft)
          hasSubMenuLeft.closest("ul").previousSibling.classList.add("active");
      } else {
        event.currentTarget
          .closest(".megaMenu-wrapper")
          .previousSibling.classList.add("active");
      }
    };

    return { addParentActive };
  },
});
</script>
