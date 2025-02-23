<template>
    <div>
        <sdPageHeader title="Notification">
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
                        <sdButton
                            type="primary"
                            size="small"
                            @click="openNotification"
                        >
                            Open the notification box
                        </sdButton>
                    </sdCards>
                </a-col>
                <a-col :md="12" :xs="24">
                    <sdCards title="Custom style">
                        <sdButton
                            type="primary"
                            size="small"
                            @click="openNotificationCustom"
                        >
                            Open the notification box
                        </sdButton>
                    </sdCards>
                </a-col>
                <a-col :md="12" :xs="24">
                    <sdCards title="Custom Icon">
                        <sdButton
                            type="primary"
                            size="small"
                            @click="openNotificationIcon"
                        >
                            Open the notification box
                        </sdButton>
                    </sdCards>
                </a-col>
                <a-col :md="12" :xs="24">
                    <sdCards title="Notification with icon">
                        <a-space class="sDash-action-btn-list">
                            <sdButton
                                type="success"
                                size="small"
                                @click="
                                    () => openNotificationWithIcon('success')
                                "
                            >
                                Success
                            </sdButton>
                            <sdButton
                                type="info"
                                size="small"
                                @click="() => openNotificationWithIcon('info')"
                            >
                                Info
                            </sdButton>
                            <sdButton
                                type="warning"
                                size="small"
                                @click="
                                    () => openNotificationWithIcon('warning')
                                "
                            >
                                Warning
                            </sdButton>
                            <sdButton
                                type="error"
                                size="small"
                                @click="() => openNotificationWithIcon('error')"
                            >
                                Error
                            </sdButton>
                        </a-space>
                    </sdCards>
                </a-col>
                <a-col :md="12" :xs="24">
                    <sdCards title="Placement">
                        <a-space class="sDash-action-btn-list">
                            <sdButton
                                type="primary"
                                size="small"
                                @click="openNotificationPlacement('topLeft')"
                            >
                                <RadiusUpleftOutlined />

                                <span>topLeft</span>
                            </sdButton>
                            <sdButton
                                type="primary"
                                size="small"
                                @click="openNotificationPlacement('topRight')"
                            >
                                <RadiusUprightOutlined />
                                <span>topRight</span>
                            </sdButton>
                        </a-space>
                        <a-divider />
                        <a-space class="sDash-action-btn-list">
                            <sdButton
                                type="primary"
                                size="small"
                                @click="openNotificationPlacement('bottomLeft')"
                            >
                                <RadiusBottomleftOutlined />
                                <span>bottomLeft</span>
                            </sdButton>
                            <sdButton
                                type="primary"
                                size="small"
                                @click="
                                    openNotificationPlacement('bottomRight')
                                "
                            >
                                <RadiusBottomrightOutlined />
                                <span>bottomRight</span>
                            </sdButton>
                        </a-space>
                    </sdCards>
                </a-col>
            </a-row>
        </Main>
    </div>
</template>

<script lang="jsx">
import { Main } from '../styled';
import { Notification } from 'ant-design-vue';
import {
    RadiusUpleftOutlined,
    RadiusUprightOutlined,
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined,
} from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Notification',
    components: {
        Main,
        RadiusUpleftOutlined,
        RadiusUprightOutlined,
        RadiusBottomleftOutlined,
        RadiusBottomrightOutlined,
    },
    setup() {
        function openNotification() {
            Notification.open({
                message: 'Notification Title',
                description:
                    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        }
        function openNotificationCustom() {
            Notification.open({
                message: 'Notification Title',
                description:
                    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                style: {
                    width: '600px',
                    marginLeft: `${335 - 600}px`,
                },
            });
        }
        function openNotificationIcon() {
            Notification.open({
                message: 'Notification Title',
                description:
                    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                icon: (
                    <sdFeatherIcons
                        type='smile'
                        size='14'
                        style='color: #108ee9'
                    />
                ),
            });
        }
        function openNotificationWithIcon(type) {
            Notification[type]({
                message: 'Notification Title',
                description:
                    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            });
        }
        function openNotificationPlacement(placement) {
            Notification.open({
                message: `Notification ${placement}`,
                description:
                    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                placement,
            });
        }
        return {
            openNotification,
            openNotificationCustom,
            openNotificationIcon,
            openNotificationPlacement,
            openNotificationWithIcon,
        };
    },
});
</script>
