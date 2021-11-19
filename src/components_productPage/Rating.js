import './Rating.css';
import { AiFillStar } from 'react-icons/ai';

const Rating = () => {



    const Rating = [
        {
            sno: '1',
            Star: 5,
            name: 'Ishank bansal',
            Review: 'Very good',
            date: new Date(2021, 2, 28),
        },
        {
            sno: '1',
            Star: 5,
            name: 'Ishank bansal',
            Review: 'Very good',
            date: new Date(2021, 2, 28),
        }
        

    ];
    return (
        <div className='rating'>
            <div className='ratehead'>
                <h1>Ratings and Reviews</h1></div>

            <div className='rate1'><p>{Rating[0].Star}<AiFillStar />&nbsp;
            &nbsp;&nbsp; {Rating[0].Review}</p>
        <p> {Rating[0].name }&nbsp;&nbsp;&nbsp;
            {Rating[0].date.toDateString()}</p>


            
             </div>

       


        </div>
    )
    // return (
    //     <div className='rating'>
    //         <div className='ratehead'>
    //             <h1>Ratings and Reviews</h1></div>

    //         <div className='rate1'>&nbsp; &nbsp; &nbsp; &nbsp;{Rating[0].Star}<AiFillStar />  Very Amazing &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    //             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    //             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    //             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    //             &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; by Ishank bansal  &nbsp; &nbsp; 22-9-2021         </div>
    //             <div className='rate2'>&nbsp; &nbsp; &nbsp; &nbsp;5<AiFillStar /> Very Amazing &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    //             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    //             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    //             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    //             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; by Ishank bansal  &nbsp; &nbsp; 22-9-2021         </div>



    //     </div>
    // )
}

export default Rating;