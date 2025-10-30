import React from 'react';
import { Button, Input } from '@/Shared/ui';
import SearchIcon from '@/Shared/assets/svg/searchIcon.svg';

const SearchTasks = () => {
    return (
        <div className='flex items-center gap-x-2'>
            <SearchIcon/>
            <Input />
            <Button>Find Tasks</Button>
        </div>
    );
};

export default SearchTasks;