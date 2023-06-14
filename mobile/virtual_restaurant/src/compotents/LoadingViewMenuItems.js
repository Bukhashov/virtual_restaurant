import { Skeleton, } from '@rneui/themed';

const LoadingViewMenuItems = (props) => {
    return (
        <Skeleton 
            style={{ marginHorizontal: 2, marginVertical: 3, borderRadius: 8, }} 
            animation="pulse" 
            width={props.width} 
            height={props.height} 
        />
    )
}

export default LoadingViewMenuItems;