<template>
    <div>
        <sdPageHeader ghost title="Search Result" />
        <Main>
            <SearchResultWrapper>
                <a-row :gutter="25">
                    <a-col :xs="24">
                        <sdAutoComplete
                            @onSearch="handleSearch"
                            placeholder="Type and search"
                            width="40%"
                            patterns
                        />
                    </a-col>
                    <a-col :xs="24">
                        <div class="search-filter-menu">
                            <ul>
                                <li>
                                    <a
                                        :class="
                                            activeClass === 'all'
                                                ? 'active'
                                                : 'deactivate'
                                        "
                                        @click="handleChange('all')"
                                        href="#"
                                    >
                                        All
                                    </a>
                                </li>
                                <li>
                                    <a
                                        :class="
                                            activeClass === 'webDesign'
                                                ? 'active'
                                                : 'deactivate'
                                        "
                                        @click="handleChange('webDesign')"
                                        href="#"
                                    >
                                        Web Design
                                    </a>
                                </li>
                                <li>
                                    <a
                                        :class="
                                            activeClass === 'uiDesign'
                                                ? 'active'
                                                : 'deactivate'
                                        "
                                        @click="handleChange('uiDesign')"
                                        href="#"
                                    >
                                        UI Design
                                    </a>
                                </li>
                                <li>
                                    <a
                                        :class="
                                            activeClass === 'wireframe'
                                                ? 'active'
                                                : 'deactivate'
                                        "
                                        @click="handleChange('wireframe')"
                                        href="#"
                                    >
                                        Wireframe
                                    </a>
                                </li>
                                <li>
                                    <a
                                        :class="
                                            activeClass === 'presentation'
                                                ? 'active'
                                                : 'deactivate'
                                        "
                                        @click="handleChange('presentation')"
                                        href="#"
                                    >
                                        Presentation
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </a-col>
                    <a-col :xs="24">
                        <ResultList>
                            <sdCards headless>
                                <div class="result-list-top">
                                    <a-row>
                                        <a-col :md="13" :xs="24">
                                            <p class="search-found-text">
                                                <span class="result-count"
                                                    >207</span
                                                >
                                                results found for
                                                <span class="result-keyword"
                                                    >“Keyword”</span
                                                >
                                            </p>
                                        </a-col>
                                        <a-col :md="11" :xs="24">
                                            <p class="result-limit">
                                                Showing 1-10 of 76 results
                                            </p>
                                        </a-col>
                                    </a-row>
                                </div>
                                <div class="result-list-content">
                                    <a-row>
                                        <a-col md="24">
                                            <nav>
                                                <ul>
                                                    <li>
                                                        <sdHeading
                                                            class="result-list-title"
                                                            as="h6"
                                                        >
                                                            <span
                                                                class="search-keyword"
                                                                >Keyword</span
                                                            >
                                                            installing lorem
                                                            multi vendor
                                                            marketplace
                                                        </sdHeading>
                                                        <p>
                                                            Lorem ipsum dolor
                                                            amet consetetur get
                                                            up and running with
                                                            a world-class
                                                            sadipscing elitr,
                                                            sed diam nonumy
                                                            eirmod...
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <sdHeading
                                                            class="result-list-title"
                                                            as="h6"
                                                        >
                                                            <span
                                                                class="search-keyword"
                                                                >Keyword</span
                                                            >
                                                            installing lorem
                                                            multi vendor
                                                            marketplace
                                                        </sdHeading>
                                                        <p>
                                                            Lorem ipsum dolor
                                                            amet consetetur get
                                                            up and running with
                                                            a world-class
                                                            sadipscing elitr,
                                                            sed diam nonumy
                                                            eirmod...
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <sdHeading
                                                            class="result-list-title"
                                                            as="h6"
                                                        >
                                                            <span
                                                                class="search-keyword"
                                                                >Keyword</span
                                                            >
                                                            installing lorem
                                                            multi vendor
                                                            marketplace
                                                        </sdHeading>
                                                        <p>
                                                            Lorem ipsum dolor
                                                            amet consetetur get
                                                            up and running with
                                                            a world-class
                                                            sadipscing elitr,
                                                            sed diam nonumy
                                                            eirmod...
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <sdHeading
                                                            class="result-list-title"
                                                            as="h6"
                                                        >
                                                            <span
                                                                class="search-keyword"
                                                                >Keyword</span
                                                            >
                                                            installing lorem
                                                            multi vendor
                                                            marketplace
                                                        </sdHeading>
                                                        <p>
                                                            Lorem ipsum dolor
                                                            amet consetetur get
                                                            up and running with
                                                            a world-class
                                                            sadipscing elitr,
                                                            sed diam nonumy
                                                            eirmod...
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <sdHeading
                                                            class="result-list-title"
                                                            as="h6"
                                                        >
                                                            <span
                                                                class="search-keyword"
                                                                >Keyword</span
                                                            >
                                                            installing lorem
                                                            multi vendor
                                                            marketplace
                                                        </sdHeading>
                                                        <p>
                                                            Lorem ipsum dolor
                                                            amet consetetur get
                                                            up and running with
                                                            a world-class
                                                            sadipscing elitr,
                                                            sed diam nonumy
                                                            eirmod...
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <sdHeading
                                                            class="result-list-title"
                                                            as="h6"
                                                        >
                                                            <span
                                                                class="search-keyword"
                                                                >Keyword</span
                                                            >
                                                            installing lorem
                                                            multi vendor
                                                            marketplace
                                                        </sdHeading>
                                                        <p>
                                                            Lorem ipsum dolor
                                                            amet consetetur get
                                                            up and running with
                                                            a world-class
                                                            sadipscing elitr,
                                                            sed diam nonumy
                                                            eirmod...
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <sdHeading
                                                            class="result-list-title"
                                                            as="h6"
                                                        >
                                                            <span
                                                                class="search-keyword"
                                                                >Keyword</span
                                                            >
                                                            installing lorem
                                                            multi vendor
                                                            marketplace
                                                        </sdHeading>
                                                        <p>
                                                            Lorem ipsum dolor
                                                            amet consetetur get
                                                            up and running with
                                                            a world-class
                                                            sadipscing elitr,
                                                            sed diam nonumy
                                                            eirmod...
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <sdHeading
                                                            class="result-list-title"
                                                            as="h6"
                                                        >
                                                            <span
                                                                class="search-keyword"
                                                                >Keyword</span
                                                            >
                                                            installing lorem
                                                            multi vendor
                                                            marketplace
                                                        </sdHeading>
                                                        <p>
                                                            Lorem ipsum dolor
                                                            amet consetetur get
                                                            up and running with
                                                            a world-class
                                                            sadipscing elitr,
                                                            sed diam nonumy
                                                            eirmod...
                                                        </p>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </a-col>
                                    </a-row>
                                </div>
                                <a-pagination
                                    show-size-changer
                                    :default-current="3"
                                    :total="40"
                                    @showSizeChange="onShowSizeChange"
                                />
                            </sdCards>
                        </ResultList>
                    </a-col>
                </a-row>
            </SearchResultWrapper>
        </Main>
    </div>
</template>

<script>
import { Main } from '../styled';
import { SearchResultWrapper, ResultList } from './style';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'Faqs',
    components: {
        Main,
        SearchResultWrapper,
        ResultList,
    },
    setup() {
        const store = useStore();
        const searchData = () => {
            return store.state.headerSearch.data;
        };
        const notData = searchData;
        let activeClass = 'all';
        let current = 0;
        let pageSize = 0;

        const handleSearch = (searchText) => {
            const data = searchData.filter((item) =>
                item.title.toUpperCase().startsWith(searchText.toUpperCase())
            );
            this.notData = data;
        };
        const handleChange = (value) => {
            activeClass = value;
        };
        const onShowSizeChange = (currents, pageSizes) => {
            current = currents;
            pageSize = pageSizes;
        };

        return {
            notData,
            activeClass,
            current,
            pageSize,
            handleSearch,
            handleChange,
            onShowSizeChange,
            searchData,
        };
    },
});
</script>
