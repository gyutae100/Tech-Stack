(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{299:function(t,r,n){t.exports=n.p+"assets/img/RadixSort.2d824d96.jpeg"},376:function(t,r,n){"use strict";n.r(r);var a=n(19),i=Object(a.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"기수-정렬-radix-sort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기수-정렬-radix-sort"}},[t._v("#")]),t._v(" 기수 정렬 (Radix Sort)")]),t._v(" "),a("p",[a("em",[t._v("written by sohyeon, hyemin 💡")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_1-기수-정렬이란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-기수-정렬이란"}},[t._v("#")]),t._v(" 1. 기수 정렬이란?")]),t._v(" "),a("p",[a("code",[t._v("기수 정렬")]),t._v("은 낮은 자리수부터 비교하여 정렬해 간다는 것을 기본 개념으로 하는 정렬 알고리즘이다."),a("br"),t._v("\n기수 정렬은 입력 데이터에 대해서 어떤 비교 연산도 실행하지 않고 데이터를 정렬할 수 있는 색다른 정렬 기법이다.")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_2-동작-방식"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-동작-방식"}},[t._v("#")]),t._v(" 2. 동작 방식")]),t._v(" "),a("img",{attrs:{src:n(299),height:"400px"}}),t._v(" "),a("p",[a("code",[t._v("10개의 버켓(bucket)")]),t._v("을 만들어서 입력 데이터를 일의 자릿수부터 각 자릿수의 값에 따라 버켓에 넣는다."),a("br"),t._v("\n그리고 위에서부터 아래로 순차적으로 버켓 안에 들어 있는 숫자들을 읽음으로써 정렬된 숫자 리스트를 얻을 수 있다.")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_3-특징"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-특징"}},[t._v("#")]),t._v(" 3. 특징")]),t._v(" "),a("h3",{attrs:{id:"_1-장점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-장점"}},[t._v("#")]),t._v(" 1) 장점")]),t._v(" "),a("ul",[a("li",[t._v("자릿수가 고정되어 있어 안정적이다.")]),t._v(" "),a("li",[t._v("데이터 간의 상대적 순서가 보존되는 stable 정렬이다.")]),t._v(" "),a("li",[t._v("비교연산을 하지 않는다.")])]),t._v(" "),a("h3",{attrs:{id:"_2-단점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-단점"}},[t._v("#")]),t._v(" 2) 단점")]),t._v(" "),a("ul",[a("li",[t._v("자릿수가 없는 데이터는 정렬하지 못한다.")]),t._v(" "),a("li",[t._v("추가적인 저장 공간이 필요하다.")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_4-시간복잡도"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-시간복잡도"}},[t._v("#")]),t._v(" 4. 시간복잡도")]),t._v(" "),a("ul",[a("li",[t._v("가장 큰 데이터의 자리 수 만큼 안전한 정렬 과정이 반복된다.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("RadixSort(A,d)\n    for i=1 to d\n        StableSort(A) on digit i\n        \n따라서, T(n) = O(dn)\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"_5-기수-정렬-java-코드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-기수-정렬-java-코드"}},[t._v("#")]),t._v(" 5. 기수 정렬 Java 코드")]),t._v(" "),a("h4",{attrs:{id:"ex-예제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ex-예제"}},[t._v("#")]),t._v(" ex) 예제")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// 기수 정렬 \nimport java.io.*; \nimport java.util.*; \n\nclass Radix { \n    // 배열 arr에서 최댓값을 얻기 위한 메소드\n    static int getMax(int arr[], int n) { \n        int mx = arr[0]; \n        for (int i = 1; i < n; i++) \n        if (arr[i] > mx) \n            mx = arr[i]; \n        return mx; \n    } \n\n    // 각 자릿수의 값에 따라 정렬하는 메소드 \n    static void countSort(int arr[], int n, int exp) { \n        int output[] = new int[n]; // 결과 배열 \n        int i; \n        int count[] = new int[10]; \n        Arrays.fill(count,0); \n\n        // Store count of occurrences in count[] \n        for (i = 0; i < n; i++) \n            count[ (arr[i]/exp)%10 ]++; \n\n        for (i = 1; i < 10; i++) \n            count[i] += count[i - 1]; \n\n        for (i = n - 1; i >= 0; i--) { \n            output[count[ (arr[i]/exp)%10 ] - 1] = arr[i]; \n            count[ (arr[i]/exp)%10 ]--; \n        } \n\n        for (i = 0; i < n; i++) \n            arr[i] = output[i]; \n    } \n\n    // 기수 정렬 \n    static void radixsort(int arr[], int n) { \n        // 최댓값의 자릿수를 찾는다.\n        int m = getMax(arr, n);     \n        for (int exp = 1; m/exp > 0; exp *= 10) \n            countSort(arr, n, exp); \n    } \n\n    // 배열을 출력하기 위한 메소드 \n    static void print(int arr[], int n) { \n        for (int i=0; i<n; i++) \n            System.out.print(arr[i]+" "); \n    } \n\n    // 기수 정렬을 실행하는 메인\n    public static void main (String[] args) { \n        int arr[] = {170, 45, 75, 90, 802, 24, 2, 66}; \n        int n = arr.length; \n        radixsort(arr, n);  \n        print(arr, n); \n    } \n} \n\n')])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"reference-additional-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-additional-resources"}},[t._v("#")]),t._v(" Reference & Additional Resources")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("C언어로 쉽게 풀어쓴 자료 구조")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.geeksforgeeks.org/radix-sort/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Radix Sort"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);r.default=i.exports}}]);