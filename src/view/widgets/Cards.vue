<template>
  <div>
    <sdPageHeader title="Widgets Cards">
      <template v-slot:buttons>
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
      <a-row :gutter="25">
        <a-col v-for="project in projects" :key="project.id" :lg="8" :xs="24">
          <GridCard v-if="project.id <= 3" :value="project" />
        </a-col>
        <a-col v-for="user in users" :key="user.id" :xxl="6" :md="12" :sm="12" :xs="24">
          <UserCards v-if="user.id <= 4" :user="user" />
        </a-col>
        <a-col v-for="product in products" :key="product.id" :xxl="6" :sm="12" :xs="24">
          <ProductCards v-if="product.id <= 4" :product="product" />
        </a-col>
        <a-col v-for="(item, index) in gallery" :key="index + 1" :xxl="6" :md="12" :sm="12" :xs="24">
          <GalleryCards :item="item" :index="index" />
        </a-col>
        <a-col v-for="user in contactUsers" :key="user.id" :xxl="6" :md="12" :sm="12" :xs="24">
          <sdCards headless v-if="user.id <= 4"> <ContactCard :user="user" /> </sdCards>
        </a-col>
        <a-col v-for="member in team" :key="member.id" :xxl="6" :md="12" :sm="12" :xs="24">
          <TeamCard v-if="member.id <= 4" :user="member">
            <template #item>
              <a to="#">
                <sdFeatherIcons size="14" type="eye" />
                <span>View</span>
              </a>
              <a to="#">
                <sdFeatherIcons size="14" type="edit" />
                <span>Edit</span>
              </a>
              <a to="#">
                <sdFeatherIcons size="14" type="trash-2" />
                <span>Delete</span>
              </a>
            </template>
          </TeamCard>
        </a-col>
        <a-col v-for="item in cardOne" :key="item.id" :xxl="6" :md="12" :sm="12" :xs="24" class="mb-25">
          <SampleCardOne :item="item" />
        </a-col>
        <a-col v-for="item in cardTwo" :key="item.id" :xxl="6" :md="12" :sm="12" :xs="24" class="mb-25">
          <SampleCardTwo :item="item" />
        </a-col>
        <a-col v-for="item in cardThree" :key="item.id" :xxl="6" :md="12" :sm="12" :xs="24" class="mb-25">
          <SampleCardThree :item="item" />
        </a-col>
        <a-col v-for="item in cardOne" :key="item.id" :xxl="6" :md="12" :sm="12" :xs="24" class="mb-25">
          <SampleCardFour :item="item" />
        </a-col>
        <a-col v-for="item in cardFive" :key="item.id" :xxl="6" :md="12" :sm="12" :xs="24" class="mb-25">
          <SampleCardFive :item="item" />
        </a-col>
        <a-col v-for="item in cardSix" :key="item.id" :xxl="6" :md="12" :sm="12" :xs="24">
          <SampleCardSix :item="item" />
        </a-col>
        <a-col v-for="item in cardSeven" :key="item.id" :xxl="6" :md="12" :sm="12" :xs="24" class="mb-25">
          <SampleCardSeven :item="item" />
        </a-col>
        <a-col :xs="24">
          <BannerCardStyleWrap>
            <sdCards headless>
              <a-row :gutter="25">
                <a-col :xxl="8" :md="12" class="mb-25">
                  <BannerCard
                    :item="{
                      id: 2,
                      type: 'border',
                      icon: 'layers.svg',
                      title: 'Dark Color',
                      content:
                        'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                      authorName: 'Barbara Marion',
                      authorImg: '10.png',
                    }"
                  />
                </a-col>
                <a-col :xxl="8" :md="12" class="mb-25">
                  <BannerCard
                    :item="{
                      id: 2,
                      type: 'border',
                      icon: 'cloud.svg',
                      title: 'Dark Color',
                      content:
                        'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                      authorName: 'Barbara Marion',
                      authorImg: '10.png',
                    }"
                  />
                </a-col>
                <a-col :xxl="8" :md="12" class="mb-25">
                  <BannerCard
                    :item="{
                      id: 3,
                      type: 'border',
                      bgImage: '',
                      icon: 'camera.svg',
                      title: 'Image',
                      content:
                        'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                      authorName: 'Garry Sobars',
                      authorImg: '10.png',
                    }"
                  />
                </a-col>
              </a-row>
            </sdCards>
          </BannerCardStyleWrap>
        </a-col>
        <a-col :xs="24">
          <BannerCardStyleWrap>
            <sdCards headless>
              <a-row :gutter="25">
                <a-col :xxl="8" :md="12" class="mb-25">
                  <BannerCard />
                </a-col>
                <a-col :xxl="8" :md="12" class="mb-25">
                  <BannerCard
                    :item="{
                      id: 2,
                      type: 'dark',
                      icon: 'water-fall.svg',
                      title: 'Dark Color',
                      content:
                        'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                      authorName: 'Barbara Marion',
                      authorImg: '10.png',
                    }"
                  />
                </a-col>
                <a-col :xxl="8" :md="12" class="mb-25">
                  <BannerCard
                    :item="{
                      id: 3,
                      type: 'Image',
                      bgImage: 'card-bg.png',
                      icon: 'image.svg',
                      title: 'Image',
                      content:
                        'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                      authorName: 'Garry Sobars',
                      authorImg: '10.png',
                    }"
                  />
                </a-col>
              </a-row>
            </sdCards>
          </BannerCardStyleWrap>

          <a-row :gutter="25">
            <a-col :lg="8" :xs="24">
              <FileCardWrapper>
                <FileListCard />
              </FileCardWrapper>
            </a-col>
            <a-col :lg="8" :xs="24">
              <FileCardWrapper>
                <FileListCard />
              </FileCardWrapper>
            </a-col>
            <a-col :lg="8" :xs="24">
              <FileCardWrapper>
                <FileListCard />
              </FileCardWrapper>
            </a-col>
          </a-row>
        </a-col>
        <a-col :xxl="18" :xs="24">
          <ProductCardsList
            :product="{
              id: 1,
              name: 'Montes Scelerisque',
              rate: 5,
              time: 1586372610052,
              price: 250,
              oldPrice: 650,
              popular: 105,
              brand: 'chair',
              category: 'furniture',
              img: 'static/img/products/1.png',
              description:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
            }"
          />
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { Main, FileCardWrapper, BannerCardStyleWrap } from '../styled';
import SampleCardOne from '../../components/cards/sampleCard/SampleCardOne';
import SampleCardTwo from '../../components/cards/sampleCard/SampleCardTwo';
import SampleCardThree from '../../components/cards/sampleCard/SampleCardThree';
import SampleCardFour from '../../components/cards/sampleCard/SampleCardFour';
import SampleCardFive from '../../components/cards/sampleCard/SampleCardFive';
import SampleCardSix from '../../components/cards/sampleCard/SampleCardSix';
import SampleCardSeven from '../../components/cards/sampleCard/SampleCardSeven';
import BannerCard from '../../components/cards/BannerCard';
import simpleCardData from '../../demoData/sampleCards.json';
import GridCard from '../apps/project/overview/GridCard';
import TeamCard from '../pages/overview/TeamCard';
import UserCards from '../pages/overview/UserCard';
import ProductCards from '../apps/ecommerce/product/overview/ProductCards';
import ProductCardsList from '../apps/ecommerce/product/overview/ProductCardList';
import GalleryCards from '../pages/overview/GalleryCards';
import ContactCard from '../apps/contact/overview/ContactCard';
import FileListCard from '../apps/project/overview/FileListCard';

const { cardOne, cardTwo, cardThree, cardFive, cardSix, cardSeven } = simpleCardData;

export default defineComponent({
  name: 'WidgetCard',
  components: {
    Main,
    FileCardWrapper,
    BannerCardStyleWrap,
    BannerCard,
    FileListCard,
    SampleCardOne,
    SampleCardTwo,
    SampleCardThree,
    SampleCardFour,
    SampleCardFive,
    SampleCardSix,
    SampleCardSeven,
    TeamCard,
    GridCard,
    UserCards,
    ProductCardsList,
    ProductCards,
    GalleryCards,
    ContactCard,
  },
  setup() {
    const { state } = useStore();
    const team = computed(() => state.team.data);
    const projects = computed(() => state.project.data);
    const users = computed(() => state.users.data);
    const products = computed(() => state.ecommerce.products);
    const gallery = computed(() => state.gallery.data);
    const contactUsers = computed(() => state.contact.data);
    return {
      cardOne,
      cardTwo,
      cardThree,
      cardFive,
      cardSix,
      cardSeven,
      team,
      projects,
      users,
      products,
      gallery,
      contactUsers,
    };
  },
});
</script>
