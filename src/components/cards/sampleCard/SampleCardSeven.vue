<template>
  <CardWrapper>
    <div class="card-short">
      <h4 class="card-short__title align-v-center">
        <img :src="require(`../../../${img}`)" alt="" />
        <span>{{ title }}</span>
      </h4>
      <div class="card-short__content">
        <p>{{ content }}</p>
      </div>
      <div :class="installed ? 'card-short__bottom installed' : 'card-short__bottom'">
        <div class="card-short-checkbox">
          <a-checkbox default-checked>Installed</a-checkbox>
        </div>
        <div class="card-short-actions">
          <div class="content-installed content-action">
            <sdButton type="primary" size="small" shape="circle" outlined rounded> Open </sdButton>
            <div class="more">
              <sdDropdown :action="['click']" class="wide-dropdwon">
                <template #overlay>
                  <router-link to="#">Edit</router-link>
                  <router-link to="#">Delete</router-link>
                  <router-link to="#">View</router-link>
                </template>
                <router-link to="#">
                  <sdFeatherIcons type="more-horizontal" size="18" />
                </router-link>
              </sdDropdown>
            </div>
          </div>
          <div class="content-not-installed content-action">
            <sdButton type="primary" size="small" shape="circle" raised rounded> Install </sdButton>
            <div class="more">
              <sdDropdown :action="['click']" class="wide-dropdwon">
                <template #overlay>
                  <a-menu>
                    <a-menu-item>
                      <router-link to="#">Edit</router-link>
                    </a-menu-item>
                    <a-menu-item>
                      <router-link to="#">Delete</router-link>
                    </a-menu-item>
                    <a-menu-item>
                      <router-link to="#">View</router-link>
                    </a-menu-item>
                  </a-menu>
                </template>
                <router-link to="#">
                  <sdFeatherIcons type="more-horizontal" size="18" />
                </router-link>
              </sdDropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  </CardWrapper>
</template>

<script>
import { defineComponent, toRefs } from 'vue';
import Styled from 'vue3-styled-components';
const CardWrapper = Styled.figure`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-bottom: 0;
  .card-short {
    .card-short__title {
      padding: 25px 25px 0;
    }
    .card-short__content {
      padding: 0 25px;
      p {
        color: ${({ theme }) => theme['gray-color']};
      }
    }
    .card-short__title {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 18px;
      img {
        max-width: 50px;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
      }
    }
    .card-short__bottom {
      border-top: 1px solid ${({ theme }) => theme['border-color-light']};
      padding: 20px 25px 25px;
      .card-short-actions {
        .ant-btn-circle {
          border-radius: 42px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 16px;
          svg,
          img,
          i {
            color: ${({ theme }) => theme['extra-light-color']};
          }
        }
        .content-action {
          display: flex;
          align-items: center;
          .ant-dropdown-trigger {
            svg,
            img,
            i {
              color: ${({ theme }) => theme['extra-light-color']};
            }
          }
        }
      }
      .card-short-checkbox {
        display: none;
      }
      .content-installed {
        display: none !important;
      }
      .content-not-installed.content-action {
        justify-content: flex-end;
      }
      &.installed {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .content-not-installed {
          display: none;
        }
        .content-installed {
          display: flex !important;
        }
        .card-short-checkbox {
          display: block !important;
          .ant-checkbox-checked {
            &:after {
              border-color: ${({ theme }) => theme['success-color']};
            }
            .ant-checkbox-inner {
              border-color: ${({ theme }) => theme['success-color']};
              background: ${({ theme }) => theme['success-color']};
              &:hover {
                border-color: ${({ theme }) => theme['success-color']};
                background: ${({ theme }) => theme['success-color']};
                color: #fff;
              }
            }
          }
          span {
            color: ${({ theme }) => theme['success-color']};
          }
        }
      }
    }
  }
`;
import VueTypes from 'vue-types';
export default defineComponent({
  name: 'SampleCardSeven',
  components: { CardWrapper },
  props: {
    item: VueTypes.object.def({
      id: 1,
      title: 'Adobe CC',
      installed: true,
      content: 'Lorem Ipsum is simply dummy text of the and the typesetting industry.',
      img: 'static/img/icon/adobe.svg',
    }),
  },
  setup(props) {
    const { item } = toRefs(props);
    const { id, title, installed, content, img } = item.value;
    return { id, title, installed, content, img };
  },
});
</script>
