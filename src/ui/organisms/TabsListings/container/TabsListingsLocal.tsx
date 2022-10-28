import { TabsActions, TabsActionType } from '@/contexts/tabs';
import { NiftyTab } from '@/models';
import { getAllChromeTabs } from '@/utils/chrome';
import { chromeTabsToNiftyTabs } from '@/utils/tabs';
import { Dispatch, memo, useEffect } from 'react';
import { TabsListings } from '../presentational';

type props = {
  local: NiftyTab[];
  dispatch: Dispatch<TabsActionType>;
  loading: boolean;
}

export const TabsListingsLocal = ({ local, dispatch, loading }: props) => {
  console.log('TabsListingsLocal');

  useEffect(() => {
    const getTabs = async () => {
      dispatch({ type: TabsActions.requestTabs });

      const resp = await getAllChromeTabs();
      const dataTabs = chromeTabsToNiftyTabs(resp ?? []);

      dispatch({ type: TabsActions.updatedLocal, payload: dataTabs });
    };
    getTabs();
  }, [dispatch]);

  return (
    <TabsListings tabs={local} />
  );
};

export const MemoizedTabsListingsLocal = memo(TabsListingsLocal);