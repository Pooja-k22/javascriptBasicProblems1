//  print common no from given array
p=[10,11,12,20,30]
q=[11,20,25,30,33]

i=0
j=0
flag=false
while(i<p.length && j<q.length){
if (p[i]==q[j]) {
    flag=true
    console.log(p[i]);
    
    i++
    j++
}
else if(p[i]<q[j]){
    i++
}
else{
    j++
}
}
!flag && console.log('no common');


// hw pairsum as 6 from given array
arr=[2,3,4,5,1,5]
pairsum=6
 l=0
 r=arr.length-1

 while (l<=r) {

    sum=arr[l]+arr[r]
    if(sum==pairsum){
        console.log( `( ${arr[l]},${arr[r]} )` );
        l+=1
        r-=1
        
    }
    else if(sum<pairsum){
        l+=1
    }
    else{
        r-=1
    }
 }
