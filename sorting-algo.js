// sorting

// 1).Bubble sort:
/*      - compare adjacent elements in array and swap the position if they are not in order
        - repeat step
        - once array with no swaps, then array is sorted
        - eg:
             [-6 20 8 4]
             -swap if -6>20 no [-6 20 8 4]
             -swap if 20>8  [-6 8 20 4]
             -swap if 20>4  [-6 8 4 20]
             
             -repeat
             -swap if -6>8 no [-6 8 4 20]
             -swap if 8>4 [-6 4 8 20]
             -swap if 8>20  no [-6 4 8 20]
*/

ar=[-6, 20,8,-2,4]

function bublesort(ar){
    for(i=0;i<ar.length-1;i++){
        for(j=0;j<ar.length-i-1;j++){
            if(ar[j]>ar[j+1]){
                t=ar[j]
                ar[j]=ar[j+1]
                ar[j+1]=t
               
            }
       }
    }
    return ar
}
arr=[-6,9,4,2,22,5]
console.log(selectionSort(arr));
console.log('............................');


// selection sorting

function selectionSort(a) {
    n=a.length                 // 6
    for(i=0;i<n-1;i++){        //0<5  1<5 2<5
        min=i                   // 0  1 2
        for (let j = i+1; j <n; j++) { //1<6  2<6 3<6
            if(a[min]>a[j]){           // -6 >9  9>4  9>2
                min=j          // 2 3
            }
            
        }
                            
        [a[i],a[min]]=[a[min],a[i]]        // [-6] [ -6 4 9] [-6 4 2 9]
        
    }
    return a
    
}
arr=[-6,9,4,2,22,5]
console.log(selectionSort(arr));
console.log('.....................');


// insertion sort

function insertionSort(ar) {
    for (let i = 1; i < ar.length; i++) {
        temp=ar[i]
        j=i-1
        while (j>=0 && ar[j]>temp) {
           ar[j+1]=ar[ar[j]] 
           j=j-1
        }
        ar[j+1]=temp
    }
}
arr=[-6,9,4,2,22,5]
console.log(selectionSort(arr));
console.log('.....................');


// Quick sort: [-6 20 8 -2 4]
/*  - pick last element as pivot =4
    - put eveything that smaller than pivot into left and greater into right : L= [-6 -2] R= [ 8 20]
    - repeat process for left and right : [-6 -2] p=-2 L=[-6] R=[] 
                                          [8 20] p= 20 L=[8] R=[]
    -repeatedly concatenate the left arr, pivot and right  : [-6 -2 8 20]
                                                                [ -6 -2 4 8 20] 
*/

function Quicksort(ar) {
    let n=ar.length
   let p=ar[n-1]
   let l=[]
   let r=[]
   if(n<2) return ar

   for (let i = 0; i <n-1; i++) {
    if(ar[i]<p){
        l.push(ar[i])
    }
    else{
        r.push(ar[i])
    }
    
   }
   
   return [...Quicksort(l), p, ...Quicksort(r)]
    
}
arr=[-6,9,-8,4,-2,20,5,7,-1,0]
console.log(Quicksort(arr));
console.log('.....................');


// merge sort:
/*  - [-6 20 8 -2 4]
    - arr length!=1 then split arr by middle  [-6 20] [8 -2 4]
    - arr length !=1 then split               [-6] [20] [8] [-2 4]
    -                                       [-6]  [20]  [8] [-2]  [4]
    - check split arr and small one move to temp : 
    - -6<20 tem=-6  
    - then push right to tem [-6 20]
    - [8] [-2 4] -2<8 tem=[-2]
    - [8] [4] 4<8 tem =[-2 4]
    - [-2 4 8] 
    - [-6 20] [-2 4 8]  -6<-2 temp=[-6]
    - [ 20] [-2 4 8] 20<-2 tem=[-6 -2]
                        tem=[-6 -2 4]
                        tem=[-6 -2 4 8]
                        tem=[-6 -2 4 8 20]
 */

                        
 function mergeSort(a) {
    n=a.length
    if (n<=1) {
        return a
    }

    const m=Math.floor(n/2)
    const left=a.slice(0,m)
    const right=a.slice(m)
    return merge(left,right)


 }  
 
 function merge(left,right) {
    let sorted=[]
    let i=0, j=0
    while (i<left.length && j<right.length) {
        if(left[i]<right[j]){
            sorted.push(left[i])
            i++
        }
        else{
            sorted.push(right[j])
            j++
        }
    }

    return sorted.concat(left.slice(i).concat(right.slice(j)))
 }
 arr=[8 ,20 ,-2, 4, -6]
 console.log(mergeSort(arr));
 console.log('....................');
 

//  Cartesian product:
/*  a=[1,2] b=[3,4]
    prod= [[1,3],[1,4],[2,3],[2,4]]  */


    function cartprod(ar1,ar2) {
        prod=[]
        for (let i = 0; i < ar1.length; i++) {
            for (let j = 0; j < ar2.length; j++) {
                prod.push([ar1[i],ar2[j]])
                
            }
            
        }
        return prod
    }
    a=[1,2] 
    b=[3,4]
    console.log(cartprod(a,b));
    

    // Climbing stairecase:
    /* starecase of n steps , count no of distnct way to climb to the top.
       you can either climb 1 or 2 steps at a time 

       n=1 , climb staire case(1) = 1     | (1)
       n=2 , climb staire case(2) = 2     | (1,1) (2)
       n=3 , climb staire case(3) = 3     | (1,1,1) (1,2) (2,1)
       n=4 , climb staire case (4)= 5     | (1,1,1,1) (1,1,2) (1,2,1) (2,1,1) (2,2)

       csc(n)=csc(n-1)+ csc(n-2) ==csc(3)=csc(2)+csc(1) */


       function climbStaireCase(n) {
          csc=[1,2]
          for(let i=2;i<=n;i++){
            csc[i]=csc[i-1]+csc[i-2]
          }
          return csc[n-1]
       }

       console.log(climbStaireCase(2));
       console.log(climbStaireCase(3));
       console.log(climbStaireCase(4));
       