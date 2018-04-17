module.exports = [
    {
        route: ['int-purchasing/transfer-delivery-order'],
        name: 'transfer-delivery-order',
        moduleId: './modules/int-purchasing/transfer-delivery-order/index',
        nav: true,
        title: 'Surat Jalan',
        auth: true,
        settings: {
            group: "int-purchasing",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: ['int-purchasing/internal-transfer-order'],
        name: 'internal-transfer-order',
        moduleId: './modules/int-purchasing/internal-transfer-order/index',
        nav: true,
        title: 'Transfer Order Internal',
        auth: true,
        settings: {
            group: "int-purchasing",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    }
    ]