<template>
    <div>
        <sdPageHeader title="List">
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
                <a-col :md="12" :xs="24">
                    <sdCards title="Simple list">
                        <a-list size="small" bordered :data-source="data">
                            <template #renderItem="{ item }">
                                <a-list-item>{{ item }}</a-list-item>
                            </template>
                            <template #header>
                                <div>Header</div>
                            </template>
                            <template #footer>
                                <div>Footer</div>
                            </template>
                        </a-list>
                    </sdCards>
                </a-col>
            </a-row>
        </Main>
    </div>
</template>

<script>
import { Main } from '../styled';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'List',
    components: {
        Main,
    },
    setup() {
        return {
            data: [
                'Racing car sprays burning fuel into crowd.',
                'Japanese princess to wed commoner.',
                'Australian walks 100km after outback crash.',
                'Man charged over missing wedding girl.',
                'Los Angeles battles huge wildfires.',
            ],
        };
    },
});
</script>
