<template>
  <CardWrapper>
    <ImageUrl :class="`banner-card banner-card-${type}`" :bgUrl="bgImage">
      <div class="banner-card__top align-center-v justify-content-between">
        <h4 class="banner-card__title">
          <img :src="require(`../../static/img/icon/${icon}`)" alt="StrikingDash Banner" />
          <span>{{ title }}</span>
        </h4>
        <div class="banner-card__action">
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
      </div>
      <div class="banner-card__body">
        <p>{{ content }}</p>
      </div>
      <div class="banner-card__bottom align-center-v justify-content-between">
        <div class="card-author">
          <img :src="require(`../../static/img/users/${authorImg}`)" alt="" />
          <span class="author-name">{{ authorName }}</span>
        </div>
        <div class="card-meta">
          <ul>
            <li>
              <sdFeatherIcons type="eye" size="16" />
              <span class="view-count">70</span>
            </li>
            <li>
              <sdFeatherIcons type="heart" size="16" />
              <span class="view-count">70</span>
            </li>
          </ul>
        </div>
      </div>
    </ImageUrl>
  </CardWrapper>
</template>

<script>
import { defineComponent, toRefs } from 'vue';
import Styled from 'vue3-styled-components';
const CardWrapper = Styled.figure`
    margin-bottom: 0;
    .banner-card{
      padding: 20px 25px 25px 25px;
      border-radius: 10px;
      &.banner-card-primary{
          background-color: ${({ theme }) => theme['primary-color']};
      }
      &.banner-card-dark{
          background-color: ${({ theme }) => theme['dark-color']};
      }
      &.banner-card-border{
          border: 1px solid ${({ theme }) => theme['border-color-light']};
          .banner-card__title{
              color: ${({ theme }) => theme['dark-color']} !important;
          }
          .banner-card__body{
              p{
                  color: ${({ theme }) => theme['gray-color']};
              }
          }
          .banner-card__bottom{
            .author-name{
                color: ${({ theme }) => theme['gray-color']};
            }
            .card-meta{
                li{
                    span{
                        color: ${({ theme }) => theme['extra-light-color']};
                    }
                }
            }
          }
      }
      .banner-card__top {
          .banner-card__title{
              font-size: 16px;
              font-weight: 500;
              display: flex;
              align-items: center;
              color: #fff;
              margin-bottom: 14px;
              img,
              svg,
              i{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
              }
            }
            .banner-card__action{
                .ant-dropdown-trigger{
                    svg,
                    i{
                        color: ${({ theme }) => theme['extra-light-color']};
                    }
                }
            }
        }
      }
      .banner-card__body{
          p{
              margin-bottom: 20px;
              line-height: 1.786;
              color: #ffffff90;
          }
      }
      .banner-card__bottom {
        .card-author{
            img{
                max-width: 30px;
                border-radius: 50%;
            }
            .author-name{
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 15px;
                font-weight: 500;
                color: #ffffff90;
            }
        }
        .card-meta{
            ul{
                display: flex;
                align-items: center;
                li{
                    display: flex;
                    align-items: center;
                    &:not(:last-child){
                        margin-right: 10px;
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
                    }
                    i{
                      line-height: 1;
                    }
                    svg,
                    img{
                        color: ${({ theme }) => theme['extra-light-color']};
                        margin-right: 6px;
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
                        width: 16px;
                    }
                    span{
                        font-size: 13px;
                        color: #fff;
                    }
                }
            }
        }
      }
  }
`;
const ImageUrl = Styled.div`
  ${({ bgUrl }) => bgUrl && `background-image: url(${require(`../../static/img/sampleCards/${bgUrl}`)})`};
  background-size: cover;
  background-reapet: no-reapet;
  background-position: center center;
`;
import VueTypes from 'vue-types';
export default defineComponent({
  name: 'BannerCard',
  components: { CardWrapper, ImageUrl },
  props: {
    item: VueTypes.object.def({
      id: 1,
      type: 'primary',
      icon: 'water-fall.svg',
      bgImage: '',
      title: 'Primary Color',
      content:
        'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
      authorName: 'Chris Doe',
      authorImg: '10.png',
    }),
  },
  setup(props) {
    const { item } = toRefs(props);
    const { id, content, icon, title, authorName, authorImg, type, bgImage } = item.value;
    return { id, content, icon, title, authorName, authorImg, type, bgImage };
  },
});
</script>
