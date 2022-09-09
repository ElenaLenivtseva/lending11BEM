
//  работает только при загрузке. Можно объяединить с resize, но с ним обратная ситуация - блок принимает новые правила, но при повторном изменении экрана не хочет возвращаться в исходных вид. Так что пусть останется только matchMedia. Если у юзера разрешение ниже 1353, все сразу отобразится правильно. 
// нет, Лена, надо править. А если наоборот сделать? типо стандарт такой - до 1353. А при медиа больше запустить скрипт обратный? Не, та же хрень будет, только наоборот
if (window.matchMedia("(max-width: 1353px)").matches) {
    let span = document.querySelectorAll('.team__member-name');
    let member = document.querySelectorAll('.team__member');
    console.log(span);
    for (let i = 0; i < span.length; i++) {
        let inner = span[i].innerHTML;
        console.log(inner);
        span[i].innerHTML = "</br>" + inner;
        for (let k = 0; k < member.length; k++) {
            member[k].style.lineHeight = "1.7";
            member[k].style.marginBottom = "1.6em";
        }
        // member.style.lineHeight = "1.7";
        // member.style.marginBottom = "1.6em";
    }
  }

// function span () {
//     let a = document.querySelectorAll('.team__member-name');
//     let array = [];
//     console.log(a);
//         // подготовиться
//     for (let i = 0; i < a.length; i++) {
//             let innerDefolt = a[i].innerHTML;
//             array.push(innerDefolt);
            
//     }
        

//         for (let k = 0; k < array.length; k++) {
//             let inner = array[k];
//             for (let i = 0; i < a.length; i++) {
//                 if (document.body.clientWidth < 1353) {
//                     a[i].innerHTML ="</br>" + inner;
//                 // } else {
//                 //     a[i].innerHTML = inner;
//                 // }
                
//             }
            
//         }
// }
// span();
// window.addEventListener("resize", span(window));
// function span (e) {
//     let width = e.target.clientWidth;
//       if(width < 1353) {
//         let a = document.querySelectorAll('.team__member-name');
//         console.log(a);
//         for (let i = 0; i < a.length; i++) {
//             let inner = a[i].innerHTML;
//             console.log(inner);
//             a[i].innerHTML = "</br>" + inner;
//         }
//      }

//   };

//   window.addEventListener('resize', function(event) {
//     let width = event.target.clientWidth;
//     // let a = document.querySelectorAll('.team__member-name');
//     // let array = [];
//     // console.log(a);
//     //     // подготовиться
//     // for (let i = 0; i < a.length; i++) {
//     //         let innerDefolt = a[i].innerHTML;
//     //         array.push(innerDefolt);
            
//     // }
        

//     //     for (let k = 0; k < array.length; k++) {
//     //         let inner = array[k];
//     //         console.log(inner);
//     //         for (let i = 0; i < a.length; i++) {
//     //             if (width < 1353) {
//     //                 a[i].innerHTML ="</br>" + inner;
//     //             } else {
//     //                 a[i].innerHTML = inner;
//     //             }
                
//     //         }
            
//     //     }
//       if(width < 1353) {
//         let a = document.querySelectorAll('.team__member-name');
//         console.log(a);
//         for (let i = 0; i < a.length; i++) {
//             let inner = a[i].innerHTML;
//             console.log(inner);
//             a[i].innerHTML = "</br>" + inner;
//         }
//      } else {
//         console.log('here');
//      }
// }, true);