// recursion- function call itself and base class is essential


// 1. fibanacci sequence

function fibanacci(n) {
     if(n<2){
        return n
     }
     return fibanacci(n-1) + fibanacci(n-2)
}
 console.log(fibanacci(0));//0
 console.log(fibanacci(1));//1
 console.log(fibanacci(6));//8
 console.log('--------------');

//  2. factorial of no

function fact(f) {
    if(f===0) return 1
     return f * fact(f-1)
        
    
}
 console.log(fact(5));
 console.log('-------------------');


/* linear search : 
    - start from first element of array and move to last 
    - at each element , cheak element is equal to target
    - if element found return index of element
    - if element not found return -1  */            

    // 1. find target from array
    //  target=10 , 6 , 20
    //  arr=[-5, 2, 10, 4, 6]

    function linearsearch(arr,t) {
        for(i=0;i<arr.length;i++){
            if(arr[i]==t)
                return i
        }
        return -1
        
    }
    console.log(linearsearch([-5, 2, 10, 4, 6], 10));
    console.log(linearsearch([-5, 2, 10, 4, 6], 6));
    console.log(linearsearch([-5, 2, 10, 4, 6], 20));
    console.log('--------------------');
    

    /* binary search:
       - only works on sorted array 
       - sort array
       - element not found return -1
       - else find middle element in array : m= (low idx + high idx)/2
       - if target is equal to middle element return mid index
       - if target is less than mid element : high=m-1
       - if target is higher than mid : low= m+1
    */

    //1. find target from array
    //  target=10 , 6 , 20
    //  arr=[-5, 2, 10, 4, 6]

    function binarySearch(arr,t) {
         arr.sort((a,b)=>a-b)  // -5 2 4 6 10
         l=0
         h=arr.length-1
         while (l<=h) {
            mid=Math.floor((l+h)/2)
            if(arr[mid]==t){
                return mid
            }
            if(arr[mid]<t){
                l=mid+1
            }
            else{
                h=mid-1
            }
         }
          return -1
    }
    console.log(binarySearch([-5, 2, 10, 4, 6],10));
    console.log(binarySearch([-5, 2, 10, 4, 6],6));
    console.log(binarySearch([-5, 2, 10, 4, 6],20));
    console.log('------------------');
    
    // recursive binary search
    //1. find target from array
    //  target=10 , 6 , 20
    //  arr=[-5, 2, 4, 6, 10]
 

    function recursiveBinarySearch(arr,t){
        return search(arr,t,0,arr.length-1)
    }
    function search(arr,t,l,h) {
        if(l>h) return -1
        m=Math.floor(l+h)/2
        if (t==arr[m]) {
            return m
        }
        if (t<arr[m]) {
           return search(arr,t,l,m-1)
        }
        else{
            return search(arr,t,m+1,h)
        }
        
        
    }
    console.log(binarySearch([-5, 2, 4, 6, 10],10));
    console.log(binarySearch([-5, 2, 4, 6, 10],6));
    console.log(binarySearch([-5, 2, 4, 6, 10],20));
    console.log('------------------');