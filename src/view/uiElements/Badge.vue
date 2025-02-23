<template>
    <div>
        <sdPageHeader title="Blank Page">
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
                <a-col :md="12" :sm="12" :xs="24">
                    <sdCards title="Basic">
                        <BadgeWraperStyle>
                            <a-badge count="5">
                                <a to="#" class="head-example" />
                            </a-badge>
                            <a-badge count="0" showZero>
                                <a to="#" class="head-example" />
                            </a-badge>
                            <a-badge>
                                <template v-slot:count>
                                    <sdFeatherIcons
                                        type="clock"
                                        style="color: #f5222d"
                                    />
                                </template>

                                <a to="#" class="head-example" />
                            </a-badge>
                        </BadgeWraperStyle>
                    </sdCards>

                    <sdCards title="Overflow Count">
                        <BadgeWraperStyle>
                            <BadgeOverflowStyle>
                                <a-badge count="99">
                                    <a to="#" class="head-example" />
                                </a-badge>
                                <a-badge count="100">
                                    <a to="#" class="head-example" />
                                </a-badge>
                                <a-badge count="99" :overflowCount="10">
                                    <a to="#" class="head-example" />
                                </a-badge>
                                <a-badge count="1000" :overflowCount="999">
                                    <a to="#" class="head-example" />
                                </a-badge>
                            </BadgeOverflowStyle>
                        </BadgeWraperStyle>
                    </sdCards>

                    <sdCards title="Clickable">
                        <BadgeWraperStyle>
                            <a to="#">
                                <a-badge :count="5">
                                    <span class="head-example" />
                                </a-badge>
                            </a>
                        </BadgeWraperStyle>
                    </sdCards>

                    <sdCards title="Status">
                        <BadgeWraperStyle>
                            <div :style="{ marginBottom: 10 }">
                                <a-badge
                                    v-for="color in colors"
                                    :key="color"
                                    :color="color"
                                />
                            </div>
                            <div>
                                <div v-for="color in colors" :key="color">
                                    <a-badge :color="color" :text="color" />
                                </div>
                            </div>
                        </BadgeWraperStyle>
                    </sdCards>
                </a-col>
                <a-col :md="12" :sm="12" :xs="24">
                    <sdCards title="Standalone">
                        <BadgeWraperStyle>
                            <BadgeStandAloneStyle>
                                <a-badge count="25" />
                                <a-badge
                                    count="4"
                                    :number-style="{
                                        backgroundColor: '#fff',
                                        color: '#999',
                                        boxShadow: '0 0 0 1px #d9d9d9 inset',
                                    }"
                                />
                                <a-badge
                                    count="109"
                                    :number-style="{
                                        backgroundColor: '#52c41a',
                                    }"
                                />
                            </BadgeStandAloneStyle>
                        </BadgeWraperStyle>
                    </sdCards>

                    <sdCards title="Red badge">
                        <BadgeWraperStyle>
                            <BadgeRedStyle>
                                <a-badge dot>
                                    <sdFeatherIcons type="bell" />
                                </a-badge>
                                <a-badge count="0" dot>
                                    <sdFeatherIcons type="bell" />
                                </a-badge>
                                <a-badge dot>
                                    <a to="#">something</a>
                                </a-badge>
                            </BadgeRedStyle>
                        </BadgeWraperStyle>
                    </sdCards>

                    <sdCards title="Dynamic">
                        <BadgeWraperStyle>
                            <BadgeDynamicStyle>
                                <div
                                    class="badge-dynamic"
                                    :style="{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                    }"
                                >
                                    <a-badge :count="count">
                                        <a to="#" class="head-example" />
                                    </a-badge>
                                    <sdBtnGroup>
                                        <sdButton type="white" @click="decline">
                                            <sdFeatherIcons type="minus" />
                                        </sdButton>
                                        <sdButton
                                            type="white"
                                            @click="increase"
                                        >
                                            <sdFeatherIcons type="plus" />
                                        </sdButton>
                                    </sdBtnGroup>
                                </div>
                                <div
                                    :style="{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginTop: '10',
                                    }"
                                >
                                    <a-badge :dot="show">
                                        <a to="#" class="head-example" />
                                    </a-badge>
                                    <a-switch
                                        @change="onChange"
                                        :checked="show"
                                    />
                                </div>
                            </BadgeDynamicStyle>
                        </BadgeWraperStyle>
                    </sdCards>
                </a-col>
            </a-row>
        </Main>
    </div>
</template>

<script>
import { Main } from '../styled';
import { defineComponent } from 'vue';
import {
    BadgeWraperStyle,
    BadgeStandAloneStyle,
    BadgeOverflowStyle,
    BadgeRedStyle,
    BadgeDynamicStyle,
} from './ui-elements-styled';
import { mapState } from 'vuex';
export default defineComponent({
    name: 'Badge',
    components: {
        Main,
        BadgeWraperStyle,
        BadgeStandAloneStyle,
        BadgeOverflowStyle,
        BadgeRedStyle,
        BadgeDynamicStyle,
    },
    setup() {
        const colors = [
            'pink',
            'red',
            'yellow',
            'orange',
            'cyan',
            'green',
            'blue',
            'purple',
            'geekblue',
            'magenta',
            'volcano',
            'gold',
            'lime',
        ];
        let count = 5;
        let show = true;

        const increase = () => {
            this.count = this.count + 1;
        };
        const decline = () => {
            let count = this.count - 1;
            if (count < 0) {
                count = 0;
            }
            this.count = count;
        };
        const onChange = (show) => {
            this.show = show;
        };
        return {
            colors,
            count,
            show,
            increase,
            decline,
            onChange,
            ...mapState(['rtl']),
        };
    },
});
</script>
