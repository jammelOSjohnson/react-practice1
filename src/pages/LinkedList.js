import {useEffect, useState} from 'react'

const LinkedList = () => {
    let [stat, setStatic ] = useState(0)

    useEffect(() => {
        if(stat == 0){
            let list = {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 2,
                        next: {
                            val: 7,
                            next: null
                        }
                    }
                }
            }
    
            console.log(list.val);
            console.log(list.next);
            console.log(list.next.val);
            setStatic(1);
        }
    }, [stat])
    return(
        <>
            Check Console
        </>
    )
}

export default LinkedList;