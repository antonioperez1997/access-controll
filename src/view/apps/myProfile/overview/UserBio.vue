<template>
  <UserBioBox>
    <sdCards headless>
      <article class="user-info">
        <sdHeading as="h5" class="user-info__title">User Bio</sdHeading>
        <p>
          Nam malesuada dolor tellus pretium amet was hendrerit facilisi id vitae enim sed ornare there suspendisse sed
          orci neque ac sed aliquet risus faucibus in pretium molestie nisl tempor quis odio habitant.
        </p>
      </article>
      <address class="user-info">
        <sdHeading as="h5" class="user-info__title">Contact Info</sdHeading>
        <ul class="user-info__contact">
          <li><sdFeatherIcons type="mail" size="14" /> <span>Clayton@example.com</span></li>
          <li><sdFeatherIcons type="phone" size="14" /> <span>+44 (0161) 347 8854</span></li>
          <li><sdFeatherIcons type="globe" size="14" /> <span>www.example.com</span></li>
        </ul>
      </address>
      <div class="user-info">
        <sdHeading as="h5" class="user-info__title">Skills</sdHeading>
        <div class="user-info__skills">
          <sdButton type="light" outlined class="btn-outlined"> UI/UX </sdButton>
          <sdButton type="light" outlined class="btn-outlined"> Branding </sdButton>
          <sdButton type="light" outlined class="btn-outlined"> product design </sdButton>
          <sdButton type="light" outlined class="btn-outlined"> web design </sdButton>
          <sdButton type="light" outlined class="btn-outlined"> Application </sdButton>
        </div>
      </div>
      <div class="user-info">
        <h5 class="user-info__title">Social Profiles</h5>
        <div class="card__social">
          <a class="btn-icon facebook" to="#">
            <font-awesome-icon
              class="super-crazy-colors"
              :icon="faFacebookF"
              size="1x"
              :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
            />
          </a>
          <a class="btn-icon twitter" to="#">
            <font-awesome-icon
              class="super-crazy-colors"
              :icon="faTwitter"
              size="1x"
              :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
            />
          </a>
          <a class="btn-icon dribble" to="#">
            <font-awesome-icon
              class="super-crazy-colors"
              :icon="faDribbble"
              size="1x"
              :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
            />
          </a>
          <a class="btn-icon instagram" to="#">
            <font-awesome-icon
              class="super-crazy-colors"
              :icon="faInstagram"
              size="1x"
              :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
            />
          </a>
        </div>
      </div>
    </sdCards>
  </UserBioBox>
</template>
<script>
import { UserBioBox } from './style';
import { defineComponent } from 'vue';
import {
  faFacebookF,
  faDribbble,
  faTwitter,
  faInstagram,
  faGithub,
  faMediumM,
} from '@fortawesome/free-brands-svg-icons';

const UserBio = defineComponent({
  name: 'UserBio',
  components: { UserBioBox },
  setup() {
    return {
      faFacebookF,
      faDribbble,
      faTwitter,
      faInstagram,
      faGithub,
      faMediumM,
    };
  },
});

export default UserBio;
</script>
