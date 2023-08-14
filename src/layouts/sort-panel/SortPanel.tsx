import filterIcon from '@/assets/svg/filter-icon.svg';
import gridViewIcon from '@/assets/svg/view-grid.svg';
import listViewIcon from '@/assets/svg/view-list.svg';
import verticalLine from '@/assets/svg/vertical-line.svg';
import s from './SortPanel.module.scss'
import {products} from '@/state/store';

const filterMenuButtons = [
    {id: 1, icon: filterIcon, href: '#'},
    {id: 2, icon: gridViewIcon, href: '#'},
    {id: 3, icon: listViewIcon, href: '#'},
]

const filterButtons = filterMenuButtons.map(button =>
    <li key={button.id}>
        <img className={s.filterMenuButton} src={button.icon} alt='filter-icon'/>
    </li>
)

const SortPanel = ({onChangeItemsPerPage, itemsPerPage, sort, onChangeSort}:
                       {
                           onChangeItemsPerPage: (option: number) => void,
                           itemsPerPage: number,
                           sort: string,
                           onChangeSort: (option: string) => void
                       }) => {
    return (
        <section className={s.sortPanel}>
            <div className={s.sortPanelWrapper}>
                <nav className={s.filterMenu}>
                    <ul className={s.filterMenuButtons}>
                        {filterButtons}
                    </ul>
                    <img src={verticalLine} alt='verticalLine'/>
                    <span className={s.filterMenuDescription}>Showing {`1-${itemsPerPage}`} of {products.length} results</span>
                </nav>
                <div className={s.sortMenu}>
                    <label htmlFor='pageSelect' className={s.sortMenuLabel}>Show</label>
                    <select className={s.sortMenuSelect} id='pageSelect' value={itemsPerPage}
                            onChange={(e) => onChangeItemsPerPage(+e.currentTarget.value)}>
                        <option value='8'>8</option>
                        <option value='16'>16</option>
                        <option value='24'>24</option>
                    </select>
                    <label htmlFor='sortSelect' className={s.sortMenuLabel}>Sort by</label>
                    <select className={s.sortMenuSelect} id='sortSelect' value={sort}
                            onChange={(e) => onChangeSort(e.currentTarget.value)}>
                        <option value='default'>Default</option>
                        <option value='name'>Name</option>
                        <option value='price'>Price</option>
                    </select>
                </div>
            </div>
        </section>


    );
};

export default SortPanel;