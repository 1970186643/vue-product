<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
    <h1 class="center">订单管理</h1>
    <el-table v-loading="listLoading" :data="list">
      <el-table-column label="ID" prop="_id" align="center" width="80">
        <template slot-scope="{row}">
          <span class="red">{{row._id}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Name" prop="name" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="OrderDate" prop="orderDate" align="center" width="400">
        <template slot-scope="{row}">
          <span>{{row.orderDate}}</span>
        </template>
      </el-table-column>
      <el-table-column label="status" prop="status" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{row.status}}</span>
        </template>
      </el-table-column>
      <el-table-column label="邮费" prop="Fee" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{row.shippingFee}}</span>
        </template>
      </el-table-column>
      <el-table-column label="单价" prop="price" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{row.total}}</span>
        </template>
      </el-table-column>
      <el-table-column label="城市" prop="city" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{row.city}}</span>
        </template>
      </el-table-column>
      <el-table-column label="地址" prop="street" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{row.street}}</span>
        </template>
      </el-table-column>
      <el-table-column label="电话" prop="phone" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{row.phone}}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page.sync="page"
      :total="total"
      :pageSize="limit"
      layout="total,prev,pager,next"
      @current-change="handleCurrentChange"
      >
    </el-pagination>
  </div>
</template>

<style>
/* .red{
  color: red;
} */
.center{
  text-align: center;
}
</style>
<script>
import  Axios from  'axios'
export default {
  data() {
    return {
      page: 1,
      total:  100,
      limit:  20, //每页
      listLoading: true,//加载数据中
      list: [
      ]
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.listLoading = false
    // }, 1000)
    Axios.get('/api/orders', {
      params: {
        page: this.page,
        limit: this.limit
      }
    })
    .then(res => {
      console.log(res);
      // this.list = res.data.result;
      this.total = res.data.total
      this.list = res.data.result;
      setTimeout(() => {
        this.listLoading = false
      }, 1000)
    })
  },
  methods:{
    handleCurrentChange(page) {
      console.log(page)
    }
  }
}
</script>