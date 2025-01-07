import { useEffect } from "react";
import {useLS} from '../../hooks/useLS';
import {PexelsFetchObject} from '../../services/pexels'
import s from './ImagesList.module.css';
import {LoadMoreBtn} from '../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import  {getData, getThunkData, getMoreThunkData} from "../../redux/pexels/operations";
import { getImages } from "../../redux/pexels/selectors";


const newPexelsFetchObject = new PexelsFetchObject();
console.log(newPexelsFetchObject);

export function ImagesList({searchValue, perPage}) {
  const searchResults = useSelector(getImages);
  const [searchValueLS, setSearchValueLS] = useLS('searchValue', '');
  const [searchPageLS, setSearchPageLS] = useLS('searchPage', '');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchValue.trim()) return;
    setSearchValueLS(searchValue);
    setSearchPageLS(1);
    dispatch(getThunkData({searchValue, perPage}))
  }, [dispatch, searchValue, perPage, setSearchPageLS, setSearchValueLS]);



  const handleClick = () => {
    if(!searchValue && searchValueLS) {
      setSearchPageLS(searchPageLS + 1); // сетим значение страницы в LS
      newPexelsFetchObject.page = searchPageLS + 1; // изменяем значение страницы
      dispatch(getMoreThunkData(searchValueLS));
    } else {
        newPexelsFetchObject.page = 1; // а в противном случае если страница на месте, то только диспачим операцию
        dispatch(getMoreThunkData());
    }
  }
  
  return (
    <>
      <ul className={s.imagesList}>
        {searchResults?.length ? (
          searchResults.map(el => (
            <li key={el.id}>
              <img src={el?.src?.tiny} alt={el.photographer} />
            </li>
          ))
        ) : (
          <p>Nothing to render</p>
        )}
      </ul>
      <LoadMoreBtn btnType="button" handleClick={handleClick} />
    </>
  );
}
