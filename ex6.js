let table_factory = (planks, logs, order_big_table, order_small_table) => {
     need_planks_small = order_small_table * 1
     need_planks_L = order_big_table * 2
     need_logs_small = order_small_table * 4
     need_logs_L = order_big_table * 6

     balanceStock_log = logs - (need_logs_small + need_logs_L)
     balanceStock_plank = planks - (need_planks_small + need_planks_L)
    if (balanceStock_log < 0 || balanceStock_plank < 0) {
        console.log("Result : No");
        if (balanceStock_plank < 0) {
            console.log("ต้องการแผ่นไม้เพิ่ม", (need_planks_small + need_planks_L) - planks);
        } else {
            console.log("ต้องการแผ่นไม้ : 0");
        }
        if (balanceStock_log < 0) {

            console.log("ต้องการท่อนไม้เพิ่ม", (need_logs_small + need_logs_L) - logs);
        } else {
            console.log("ต้องการท่อนไม้ : 0");
        }

    } else {

        console.log("Result : Yes");
        console.log("balance Stock plank :", balanceStock_plank);
        console.log("balance Stock logs :", balanceStock_log);
    }
    
}

table_factory(100, 200, 5, 0);
table_factory(30, 100, 10, 20);
table_factory(100, 400, 40, 20);
table_factory(100, 5, 5, 0);
table_factory(120, 320, 40, 20);
table_factory(80, 400, 40, 20);