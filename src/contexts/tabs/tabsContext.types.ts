import { NiftyTab } from '@/models';

export enum TabSectionFilter {
    tabs = 'tabs',
    groups = 'groups',
    sessions = 'sessions'
};

export enum TabsStoredType {
    local = 'local',
    saved = 'saved'
}

export interface TabsStore {
    local: NiftyTab[];
    saved: NiftyTab[];
    tabSection: TabSectionFilter;
    typeOfStore: TabsStoredType;
    loading: boolean;
}

export enum TabsActions {
    requestTabs = 'request_tabs',
    updatedLocal = 'updated_local',
    updatedSaved = 'updated_saved',
    changeTabsSection = 'tabs_section',
    changeTypeOfStore = 'type_of_store'
}

export type TabsActionType =
    | { type: TabsActions.requestTabs; }
    | { type: TabsActions.updatedLocal; payload: NiftyTab[]; }
    | { type: TabsActions.updatedSaved; payload: NiftyTab[]; }
    | { type: TabsActions.changeTabsSection; payload: TabSectionFilter }
    | { type: TabsActions.changeTypeOfStore; payload: TabsStoredType };