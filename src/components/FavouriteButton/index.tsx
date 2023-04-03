import { FaHeart, FaRegHeart } from "react-icons/fa";
import { HeartContainer } from "./style";
import { useEffect, useState } from "react";

interface FaFavouriteButtonProps {
    id: number
}

function FavouriteButton(props: FaFavouriteButtonProps) {
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        const stringifyIds = localStorage.getItem('favourites') || '[]';
        const favouriteBeerIds = JSON.parse(stringifyIds) || [];
        setIsFavourite(favouriteBeerIds.includes(props.id))
    }, [props.id]);

    const onHeartClick = () => {
        const stringifyIds = localStorage.getItem('favourites') || '[]';
        let favouriteBeerIds: number[] = JSON.parse(stringifyIds) || [];
        if (!isFavourite) {
            favouriteBeerIds.push(props.id);
            setIsFavourite(true);
        } else {
            favouriteBeerIds = favouriteBeerIds.filter(favouriteId => favouriteId !== props.id);
            setIsFavourite(false);
        }
        localStorage.setItem('favourites', JSON.stringify(favouriteBeerIds))
    };

    const iconSize = 25;

    return (
        <HeartContainer onClick={onHeartClick}>
            {isFavourite ? <FaHeart size={iconSize} /> : <FaRegHeart size={iconSize} />}
        </HeartContainer>
    )
}

export default FavouriteButton;