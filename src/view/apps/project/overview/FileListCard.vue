<template>
  <sdCards title="Files">
    <div class="file-list">
      <div class="file-list__single d-flex">
        <div class="file-single-info d-flex">
          <div class="file-single-logo">
            <img :src="require(`@/static/img/files/zip.png`)" alt="File Logo" />
          </div>
          <div class="file-single__content">
            <span class="file-name">Main-admin-design.zip</span>
            <span class="file-size">7.05 MB</span>
            <span class="file-content-action">
              <a to="#">Download</a>
            </span>
          </div>
        </div>
        <div class="file-single-action">
          <sdDropdown class="wide-dropdwon">
            <template #overlay>
              <a to="#">
                <sdFeatherIcons type="eye" size="14" />
                View
              </a>
              <a to="#">
                <sdFeatherIcons type="edit" size="14" />
                Edit
              </a>
              <a to="#">
                <sdFeatherIcons type="trash-2" size="14" />
                Delete
              </a>
            </template>
            <a to="#">
              <sdFeatherIcons type="more-horizontal" size="16" />
            </a>
          </sdDropdown>
        </div>
      </div>

      <div class="file-list__single d-flex">
        <div class="file-single-info d-flex">
          <div class="file-single-logo">
            <img :src="require(`@/static/img/files/pdf.png`)" alt="File Logo" />
          </div>
          <div class="file-single__content">
            <span class="file-name">Product-guidelines.pdf</span>
            <span class="file-size">522 KB</span>
            <span class="file-content-action">
              <a to="#">View</a>
              <a to="#">Download</a>
            </span>
          </div>
        </div>
        <div class="file-single-action">
          <sdDropdown class="wide-dropdwon">
            <template #overlay>
              <a to="#">
                <sdFeatherIcons type="eye" size="14" />
                View
              </a>
              <a to="#">
                <sdFeatherIcons type="edit" size="14" />
                Edit
              </a>
              <a to="#">
                <sdFeatherIcons type="trash-2" size="14" />
                Delete
              </a>
            </template>
            <a to="#">
              <sdFeatherIcons type="more-horizontal" size="16" />
            </a>
          </sdDropdown>
        </div>
      </div>

      <div class="file-list__single d-flex">
        <div class="file-single-info d-flex">
          <div class="file-single-logo">
            <img :src="require(`@/static/img/files/psd.png`)" alt="File Logo" />
          </div>
          <div class="file-single__content">
            <span class="file-name">admin-wireframe.psd</span>
            <span class="file-size">2.05 MB</span>
            <span class="file-content-action">
              <a to="#">Download</a>
            </span>
          </div>
        </div>
        <div class="file-single-action">
          <sdDropdown class="wide-dropdwon">
            <a to="#">
              <sdFeatherIcons type="more-horizontal" size="16" />
            </a>
          </sdDropdown>
        </div>
      </div>

      <div class="file-list__single d-flex">
        <div class="file-single-info d-flex">
          <div class="file-single-logo">
            <img :src="require(`@/static/img/files/jpg.png`)" alt="File Logo" />
          </div>
          <div class="file-single__content">
            <span class="file-name">Wirefram-escreenshots.jpg</span>
            <span class="file-size">522 KB</span>
            <span class="file-content-action">
              <a to="#">View</a>
              <a to="#">Download</a>
            </span>
          </div>
        </div>
        <div class="file-single-action">
          <sdDropdown class="wide-dropdwon">
            <template #overlay>
              <a to="#">
                <sdFeatherIcons type="eye" size="14" />
                View
              </a>
              <a to="#">
                <sdFeatherIcons type="edit" size="14" />
                Edit
              </a>
              <a to="#">
                <sdFeatherIcons type="trash-2" size="14" />
                Delete
              </a>
            </template>
            <a to="#">
              <sdFeatherIcons type="more-horizontal" size="16" />
            </a>
          </sdDropdown>
        </div>
      </div>

      <div class="file-list__single d-flex">
        <div class="file-single-info d-flex">
          <div class="file-single-logo">
            <img :src="require(`@/static/img/files/png.png`)" alt="File Logo" />
          </div>
          <div class="file-single__content">
            <span class="file-name">Logo.png</span>
            <span class="file-size">522 KB</span>
            <span class="file-content-action">
              <a to="#">View</a>
              <a to="#">Download</a>
            </span>
          </div>
        </div>
        <div class="file-single-action">
          <sdDropdown class="wide-dropdwon">
            <template #overlay>
              <div class="dropdown-more">
                <a to="#">
                  <sdFeatherIcons type="eye" size="14" />
                  View
                </a>
                <a to="#">
                  <sdFeatherIcons type="edit" size="14" />
                  Edit
                </a>
                <a to="#">
                  <sdFeatherIcons type="trash-2" size="14" />
                  Delete
                </a>
              </div>
            </template>
            <a to="#">
              <sdFeatherIcons type="more-horizontal" size="16" />
            </a>
          </sdDropdown>
        </div>
      </div>
    </div>
  </sdCards>
</template>
<script>
import { defineComponent } from 'vue';
const FileListCard = defineComponent({
  name: 'FileListCard',
});

export default FileListCard;
</script>
