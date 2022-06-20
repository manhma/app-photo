import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/button/Button';
import { confirmData, fetchPhotoData } from '../../redux/listPhotoSlice';
import { AppDispatch } from '../../redux/store';
import Card from './Card';
import './home.scss';
import { IPhotoData } from '../../interface';

type Props = {};

function HomePage({}: Props) {
    const dispatch = useDispatch<AppDispatch>();
    const photoData = useSelector((state: any) => state.listPhoto.photoData);
    const [disableBtn, setDisableBtn] = useState(true);
    const [dataEdit, setDataEdit] = useState<any>([]);
    const [isReset, setIsReset] = useState(false);

    const handleConfirm = () => {
        dispatch(confirmData(dataEdit));
        setDataEdit([]);
    };

    const handleEdit = (values: IPhotoData) => {
        setDataEdit([...dataEdit, values]);
    };

    useEffect(() => {
        dispatch(fetchPhotoData());
    }, []);
    useEffect(() => {
        if (dataEdit.length !== 0) {
            setDisableBtn(false);
        } else {
            setDisableBtn(true);
        }
    }, [dataEdit]);
    return (
        <div className="container-home">
            <div className="header">
                <Button disabled={disableBtn} styleBtn="btn-success" btnName="Confirm" handleFunc={handleConfirm} />
                <Button
                    disabled={disableBtn}
                    styleBtn="btn-info"
                    btnName="Reset"
                    handleFunc={() => {
                        // dispatch(fetchPhotoData());
                        setIsReset(!isReset);
                    }}
                />
            </div>
            <div>
                {photoData.map((item: IPhotoData) => (
                    <Card key={item.id} data={item} handleEdit={handleEdit} isReset={isReset} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
