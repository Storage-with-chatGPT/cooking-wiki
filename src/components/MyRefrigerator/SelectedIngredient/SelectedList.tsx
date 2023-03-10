import { useDispatch, useSelector } from 'react-redux';

import SearchFoodList from '@/components/MyRefrigerator/SelectedIngredient/SearchFoodList';
import type { RootState } from '@/store';
import { deleteSelectListInItem } from '@/store/slice/ingredientListSlice';
import { hasValue } from '@/utils/hasValue';

const SelectIngredientList = () => {
  const selectList = useSelector((state: RootState) => state.ingredientList.selectList);
  const dispatch = useDispatch();

  const hasSelectList = hasValue(selectList);

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => dispatch(deleteSelectListInItem(e.currentTarget.id));

  return (
    <>
      {hasSelectList && (
        <div className="w-64 shadow-xl flex flex-col items-center rounded-md bg-yellow/10">
          <p className="font-bold text-xl m-3">선택된 재료</p>
          <ul className="my-6 overflow-y-auto h-60">
            {selectList.map((ingredient) => (
              <li className="mb-3 flex items-center" key={ingredient}>
                <span className="inline-block item-ingredient font-bold">{ingredient}</span>
                <button className="btn-option-del" id={ingredient} onClick={handleDelete}>
                  삭제
                </button>
              </li>
            ))}
          </ul>
          <SearchFoodList />
        </div>
      )}
    </>
  );
};

export default SelectIngredientList;
