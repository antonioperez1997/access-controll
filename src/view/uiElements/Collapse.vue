<template>
    <div>
        <sdPageHeader title="Collapse">
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
                    <sdCards title="Basic">
                        <a-collapse v-model="activeKey">
                            <a-collapse-panel
                                key="1"
                                header="This is panel header 1"
                            >
                                <p>{{ text }}</p>
                            </a-collapse-panel>
                            <a-collapse-panel
                                key="2"
                                header="This is panel header 2"
                            >
                                <p>{{ text }}</p>
                            </a-collapse-panel>
                            <a-collapse-panel
                                key="3"
                                header="This is panel header 3"
                                collapsible="disabled"
                            >
                                <p>{{ text }}</p>
                            </a-collapse-panel>
                        </a-collapse>
                    </sdCards>
                    <sdCards title="Nested Panel">
                        <a-collapse @change="changeActivekey">
                            <a-collapse-panel
                                key="1"
                                header="This is panel header 1"
                            >
                                <a-collapse default-active-key="4">
                                    <a-collapse-panel
                                        key="4"
                                        header="This is panel nest panel"
                                    >
                                        <p>{{ text }}</p>
                                    </a-collapse-panel>
                                </a-collapse>
                            </a-collapse-panel>
                            <a-collapse-panel
                                key="2"
                                header="This is panel header 2"
                            >
                                <p>{{ text }}</p>
                            </a-collapse-panel>
                            <a-collapse-panel
                                key="3"
                                header="This is panel header 3"
                            >
                                <p>{{ text }}</p>
                            </a-collapse-panel>
                        </a-collapse>
                    </sdCards>
                    <sdCards title="No arrow">
                        <a-collapse v-model="activeKey">
                            <a-collapse-panel
                                :showArrow="false"
                                key="1"
                                header="This is panel header 1"
                            >
                                <p>{{ text }}</p>
                            </a-collapse-panel>
                            <a-collapse-panel
                                :showArrow="false"
                                key="2"
                                header="This is panel header 2"
                            >
                                <p>{{ text }}</p>
                            </a-collapse-panel>
                            <a-collapse-panel
                                :showArrow="false"
                                key="3"
                                header="This is panel header 3"
                                collapsible="disabled"
                            >
                                <p>{{ text }}</p>
                            </a-collapse-panel>
                        </a-collapse>
                    </sdCards>
                </a-col>
                <a-col :md="12" :xs="24">
                    <sdCards title="Accordion">
                        <a-collapse accordion>
                            <a-collapse-panel
                                key="1"
                                header="This is panel header 1"
                            >
                                <p>{{ text }}</p>
                            </a-collapse-panel>
                            <a-collapse-panel
                                key="2"
                                header="This is panel header 2"
                            >
                                <p>{{ text }}</p>
                            </a-collapse-panel>
                            <a-collapse-panel
                                key="3"
                                header="This is panel header 3"
                            >
                                <p>{{ text }}</p>
                            </a-collapse-panel>
                        </a-collapse>
                    </sdCards>
                    <sdCards title="Borderless">
                        <a-collapse default-active-key="1" :bordered="false">
                            <a-collapse-panel
                                key="1"
                                header="This is panel header 1"
                            >
                                <p>{{ text }}</p>
                            </a-collapse-panel>
                            <a-collapse-panel
                                key="2"
                                header="This is panel header 2"
                            >
                                <p>{{ text }}</p>
                            </a-collapse-panel>
                            <a-collapse-panel
                                key="3"
                                header="This is panel header 3"
                            >
                                <p>{{ text }}</p>
                            </a-collapse-panel>
                        </a-collapse>
                    </sdCards>
                    <sdCards title="Custom Panel">
                        <a-collapse default-active-key="1" :bordered="false">
                            <template #expandIcon="props">
                                <sdFeatherIcons
                                    :type="
                                        props.isActive
                                            ? 'chevron-down'
                                            : 'chevron-right'
                                    "
                                    size="14"
                                />
                            </template>
                            <a-collapse-panel
                                key="1"
                                header="This is panel header 1"
                                :style="customStyle"
                            >
                                <p>{{ text }}</p>
                            </a-collapse-panel>
                            <a-collapse-panel
                                key="2"
                                header="This is panel header 2"
                                :style="customStyle"
                            >
                                <p>{{ text }}</p>
                            </a-collapse-panel>
                            <a-collapse-panel
                                key="3"
                                header="This is panel header 3"
                                :style="customStyle"
                            >
                                <p>{{ text }}</p>
                            </a-collapse-panel>
                        </a-collapse>
                    </sdCards>
                </a-col>
            </a-row>
        </Main>
    </div>
</template>

<script>
import { Main } from '../styled';
import { defineComponent, watch } from 'vue';

export default defineComponent({
    name: 'Collapse',
    components: {
        Main,
    },
    setup() {
        const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
        const activeKey = ['1'];
        const customStyle =
            'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden';

        function changeActivekey(key) {
            console.log(key);
        }

        watch(
            () => activeKey,
            (newKey, oldKey) => {
                console.log(`New key: ${newKey}, old key: ${oldKey}`);
            }
        );

        return {
            text,
            activeKey,
            customStyle,
            changeActivekey,
        };
    },
});
</script>
