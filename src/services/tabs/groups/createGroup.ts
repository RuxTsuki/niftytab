import { supabase } from '@/api/config';
import { GroupsTabsSupabase } from '@/models';
import { DEFAULT_GROUP_NAME } from '../tabs.statics';

export const createGroup = async (group: GroupsTabsSupabase) => {
    const { data, error } = await supabase
        .from('groups')
        .insert([group]);

    return { data, error };
};

export const createDefaultGroup = async (userId: string) => {
    const defaultGroup: GroupsTabsSupabase = {
        collapsed: false,
        title: DEFAULT_GROUP_NAME,
        user_id: userId
    };

    createGroup(defaultGroup);
};
