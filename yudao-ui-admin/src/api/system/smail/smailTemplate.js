import request from '@/utils/request'

// 创建邮件模板
export function createSmailTemplate(data) {
  return request({
    url: '/system/smail-template/create',
    method: 'post',
    data: data
  })
}

// 更新邮件模板
export function updateSmailTemplate(data) {
  return request({
    url: '/system/smail-template/update',
    method: 'put',
    data: data
  })
}

// 删除邮件模板
export function deleteSmailTemplate(id) {
  return request({
    url: '/system/smail-template/delete?id=' + id,
    method: 'delete'
  })
}

// 获得邮件模板
export function getSmailTemplate(id) {
  return request({
    url: '/system/smail-template/get?id=' + id,
    method: 'get'
  })
}

// 获得短信模板分页
export function getSmsTemplatePage(query) {
  return request({
    url: '/system/sms-template/page',
    method: 'get',
    params: query
  })
}

// 创建短信模板
export function sendSms(data) {
  return request({
    url: '/system/sms-template/send-sms',
    method: 'post',
    data: data
  })
}

// 导出短信模板 Excel
export function exportSmsTemplateExcel(query) {
  return request({
    url: '/system/sms-template/export-excel',
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}

