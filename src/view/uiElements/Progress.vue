<template>
    <div>
        <sdPageHeader title="Progress Bar">
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
                <a-col :lg="12" :md="12" :xs="24">
                    <sdCards
                        title="Basic"
                        caption="The simplest use of Progress bar"
                    >
                        <a-progress
                            :percent="30"
                            :style="{ marginBottom: '15px' }"
                        />
                        <a-progress
                            :percent="50"
                            status="active"
                            :style="{ marginBottom: '15px' }"
                        />
                        <a-progress
                            :percent="70"
                            status="exception"
                            :style="{ marginBottom: '15px' }"
                        />
                        <a-progress
                            :percent="100"
                            :style="{ marginBottom: '15px' }"
                        />
                        <a-progress :percent="50" :showInfo="false" />
                    </sdCards>
                    <sdCards
                        title="Mini size Circular progress bar"
                        caption="The simplest use of Progress bar"
                    >
                        <a-progress
                            type="circle"
                            :percent="30"
                            :width="80"
                            :style="{ marginRight: '15px' }"
                        />
                        <a-progress
                            type="circle"
                            :percent="70"
                            :width="80"
                            status="exception"
                            :style="{ marginRight: '15px' }"
                        />
                        <a-progress type="circle" :percent="100" :width="80" />
                    </sdCards>
                    <sdCards
                        title="Dashboard"
                        caption="The simplest use of Progress bar"
                    >
                        <a-progress type="dashboard" :percent="70" />
                    </sdCards>
                    <sdCards
                        title="Square linecaps"
                        caption="The simplest use of Progress bar"
                    >
                        <a-progress
                            strokeLinecap="square"
                            :percent="75"
                            :style="{ marginBottom: '15px' }"
                        />
                        <a-progress
                            strokeLinecap="square"
                            type="circle"
                            :percent="75"
                            :style="{ marginRight: '15px' }"
                        />
                        <a-progress
                            strokeLinecap="square"
                            type="dashboard"
                            :percent="75"
                        />
                    </sdCards>
                    <sdCards
                        title="Dynamic circle"
                        caption="The simplest use of Progress bar"
                    >
                        <a-progress type="circle" :percent="percent" />
                        <a-button-group>
                            <sdButton onClick="{decline}" icon="minus" />
                            <sdButton onClick="{increase}" icon="plus" />
                        </a-button-group>
                    </sdCards>
                    <sdCards
                        title="Progress bar with success segment"
                        caption="The simplest use of Progress bar"
                    >
                        <a-tooltip title="3 done / 3 in progress / 4 to do">
                            <a-progress
                                :percent="60"
                                success:percent="30"
                                :style="{ marginBottom: '15px' }"
                            />
                        </a-tooltip>
                        <a-tooltip title="3 done / 3 in progress / 4 to do">
                            <a-progress
                                :percent="60"
                                success:percent="30"
                                type="circle"
                                :style="{ marginRight: '15px' }"
                            />
                        </a-tooltip>
                        <a-tooltip title="3 done / 3 in progress / 4 to do">
                            <a-progress
                                :percent="60"
                                success:percent="30"
                                type="dashboard"
                            />
                        </a-tooltip>
                    </sdCards>
                </a-col>
                <a-col :lg="12" :md="12" :xs="24">
                    <sdCards
                        title="Circular progress bar"
                        caption="The simplest use of Progress bar"
                    >
                        <a-progress
                            type="circle"
                            :percent="75"
                            :style="{ marginRight: '15px' }"
                        />
                        <a-progress
                            type="circle"
                            :percent="70"
                            status="exception"
                            :style="{ marginRight: '15px' }"
                        />
                        <a-progress type="circle" :percent="100" />
                    </sdCards>
                    <sdCards
                        title="Mini size progress bar"
                        caption="The simplest use of Progress bar"
                    >
                        <a-progress
                            size="small"
                            :percent="30"
                            :width="80"
                            :style="{ marginBottom: '15px' }"
                        />
                        <a-progress
                            size="small"
                            :percent="70"
                            :width="80"
                            status="exception"
                            :style="{ marginBottom: '15px' }"
                        />
                        <a-progress size="small" :percent="100" :width="80" />
                    </sdCards>
                    <sdCards
                        title="Square linecaps"
                        caption="The simplest use of Progress bar"
                    >
                        <a-progress
                            strokeLinecap="square"
                            :percent="75"
                            :style="{ marginBottom: '15px' }"
                        />
                        <a-progress
                            strokeLinecap="square"
                            type="circle"
                            :percent="75"
                            :style="{ marginRight: '15px' }"
                        />
                        <a-progress
                            strokeLinecap="square"
                            type="dashboard"
                            :percent="75"
                        />
                    </sdCards>
                    <sdCards
                        title="Dynamic"
                        caption="The simplest use of Progress bar"
                    >
                        <a-progress :percent="percent" />
                        <a-button-group>
                            <sdButton onClick="{decline}" icon="minus" />
                            <sdButton onClick="{increase}" icon="plus" />
                        </a-button-group>
                    </sdCards>
                    <sdCards
                        title="Custom Text"
                        caption="The simplest use of Progress bar"
                    >
                        <a-progress
                            type="circle"
                            :percent="75"
                            :format="(percent) => `${percent} Days`"
                        />
                        <a-progress
                            type="circle"
                            :percent="100"
                            :format="() => 'Done'"
                        />
                        <a-progress type="circle" :percent="75">
                            <template #format="percent">
                                <span style="color: red">{{ percent }}</span>
                            </template>
                        </a-progress>
                    </sdCards>
                    <sdCards
                        title="Custom line gradient"
                        caption="The simplest use of Progress bar"
                    >
                        <a-progress
                            :stroke-color="{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }"
                            :percent="99.9"
                        />
                        <a-progress
                            :stroke-color="{
                                from: '#108ee9',
                                to: '#87d068',
                            }"
                            :percent="99.9"
                            status="active"
                        />
                        <a-progress
                            type="circle"
                            :stroke-color="{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }"
                            :percent="90"
                        />
                        <a-progress
                            type="circle"
                            :stroke-color="{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }"
                            :percent="100"
                        />
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
    name: 'Empty',
    components: {
        Main,
    },
    setup() {
        let percent = 0;
        const increase = () => {
            let percent = this.percent + 10;
            if (percent > 100) {
                percent = 100;
            }
            this.percent = percent;
        };
        const decline = () => {
            let percent = this.percent - 10;
            if (percent < 0) {
                percent = 0;
            }
            this.percent = percent;
        };
        return {
            percent,
            increase,
            decline,
        };
    },
});
</script>
