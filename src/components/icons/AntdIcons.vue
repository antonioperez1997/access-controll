<script lang="jsx">
import { Row, Col } from 'ant-design-vue';
import { AnIcon, IconWrapper } from './IconStyled';
import * as Icons from '@ant-design/icons-vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AntdIcon',
    components: {
        AnIcon,
        IconWrapper,
    },
    setup() {
        return {
            Icons,
        };
    },
    render() {
        return (
            <Row gutter={15}>
                {Object.values(Icons)
                    .filter(
                        (item) =>
                            item.name !== 'default' &&
                            item.name !== 'setTwoToneColor' &&
                            item.name !== 'getTwoToneColor' &&
                            item.name !== 'canlendar' &&
                            item.name !== 'interation' &&
                            item.name !== 'colum-height' &&
                            item.name !== 'createFromIconfontCN'
                    )
                    .map((icon, key) => {
                        const customTag = Icons[icon.name];
                        return (
                            <Col xl={6} md={12} xs={24} key={key + 1}>
                                <AnIcon class='icon-single'>
                                    <customTag />
                                    <span> {icon.name}</span>
                                </AnIcon>
                            </Col>
                        );
                    })}
            </Row>
        );
    },
});
</script>
