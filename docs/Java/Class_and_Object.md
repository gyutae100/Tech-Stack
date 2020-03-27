# 클래스와 객체 (Class and Obejct)

## 클래스(Class)

**클래스**란 객체를 정의해 놓은 것  
**객체의 설계도 또는 틀**이라고 정의 가능  
객체를 생성하는데 사용되며, 객체는 클래스에 정의된 대로 생성 됨

## 객체(Object)

**객체**란 실제로 존재하는 것  
눈으로 볼 수 있는 형태가 있는 것 뿐만 아니라  
개념이나 논리와 같은 형태가 없는 것도 객체로 간주함 

**소프트웨어 세계에 구현할 대상**  
클래스에 선언된 모양 그대로 생성된 실체  

    - 클래스 사용의 장점
      : 잘 만들어진 클래스만 있다면, 동일한 객체를 필요할 때마다 쉽게 생성 가능

## 객체와 인스턴스

![인스턴스화](/images/Java/resources/instantiate.PNG "width:500px;")  

객체와 인스턴스는 같은 의미이지만,  

**객체**는 모든 인스턴스를 대표하는 **포괄적인 의미**  

**인스턴스**는 설계도를 바탕으로 **소프트웨어 세계에 구현된 구체적인 실체**  
어떤 클래스로부터 만들어진 것인지를 강조하는 보다 **구체적인 의미**  
(실체화된 인스턴스는 메모리에 할당됨) 

#### ex) 예제   
```Java
/* 클래스 */
public class Human {
    ...
}
/* 객체와 인스턴스 */
public class Main {
    public static void main(String[] args) {
        Human child, adult; // '객체'

        // 인스턴스화
        child = new Human(); // child는 Human 클래스의 '인스턴스'(객체를 메모리에 할당)
        adult = new Human();
    }
}
```    

## 클래스, 객체, 인스턴스의 차이

- **클래스(Class) VS 객체(Object)**

  **클래스**는 ‘설계도’, **객체**는 ‘설계도로 구현한 모든 대상’  
  
- **객체(Object) VS 인스턴스(Instance)**  

  클래스의 타입으로 선언되었을 때 **객체**, 그 객체가 메모리에 할당되어 실제 사용될 때 **인스턴스**

  객체는 현실 세계에 가깝고, 인스턴스는 소프트웨어 세계에 가까움    
  객체는 ‘실체’, 인스턴스는 ‘관계’  
  객체를 ‘클래스의 인스턴스’라고도 부름  
