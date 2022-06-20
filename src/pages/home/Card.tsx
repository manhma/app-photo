import React, { useEffect, useRef, useState } from 'react';
import { IPhotoData } from '../../interface';
import './home.scss';

type Props = {
    data: IPhotoData;
    handleEdit: any;
    isReset: boolean;
};

function Card({ data, handleEdit, isReset }: Props) {
    const { albumId, title, url, thumbnailUrl, id } = data;
    const [isShowInput, setIsShowInput] = useState(false);
    const [input, setInput] = useState<string>(title);
    const bgClolorCart = id % 2 === 0 ? 'bg-secondary' : 'bg-white';
    const inputRef = useRef<any>();

    const submitEdit = () => {
        setIsShowInput(!isShowInput);
        handleEdit({
            albumId,
            title: input,
            url,
            thumbnailUrl,
            id,
        });
    };
    useEffect(() => {
        setInput(title);
    }, [isReset]);

    useEffect(() => {
        if (isShowInput) {
            inputRef.current.focus();
        }
    }, [isShowInput]);
    return (
        <div className={`wrapper-cart ${bgClolorCart}`}>
            <div className="">
                <img src={thumbnailUrl} className="" alt="..." />
            </div>
            <div className="content-cart">
                <div className=" content">
                    {isShowInput ? (
                        <input
                            className="input-card"
                            ref={inputRef}
                            value={input}
                            onBlur={() => submitEdit()}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    ) : (
                        <label className="title-label" onClick={() => setIsShowInput(!isShowInput)}>
                            {input}
                        </label>
                    )}

                    <label className="">
                        <small className="">{Date.now()}</small>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Card;
