function Factory() {

}

Factory.create = function (type) {
    switch (type) {
        case 'normal':
            return new Normal();
        case 'gunCarrier':
            return new GunCarrier();
        case 'strong':
            return new Strong();
        default:
            break;
    }
}


// Factory.create = function (type) {
//     switch (type) {
//         case 'BMW':
//             //创建宝马
//             break;
//         case 'Audi':
//             //创建奥迪
//             break;
//     }
// }
