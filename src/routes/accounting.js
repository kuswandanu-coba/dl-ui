module.exports = [
    {
        route: '/accounting/journal-transaction',
        name: 'journal-transaction',
        moduleId: './modules/accounting/journal-transaction/index',
        nav: true,
        title: 'Jurnal Transaksi',
        auth: true,
        settings: {
            group: "accounting",
            permission: { "P1": 1, "P2": 1, "P3": 1, "P4": 1, "P5": 1, "P6": 1, "P7": 1, "PI": 1, "PG": 1, "PK": 1, "C9": 1 },
            iconClass: 'fa fa-clone'
        }
    }
];
