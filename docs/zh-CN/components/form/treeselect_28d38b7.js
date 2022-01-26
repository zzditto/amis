amis.define('docs/zh-CN/components/form/treeselect.md', function(require, exports, module, define) {

  module.exports = {
    "title": "TreeSelect 树形选择器",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "TreeSelect 树形选择器",
    "icon": null,
    "order": 60,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" href=\"#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本使用</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree\",\n      \"label\": \"Tree\",\n      \"searchable\": true,\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        },\n        {\n          \"label\": \"Folder E\",\n          \"children\": [\n            {\n              \"label\": \"Folder G\",\n              \"children\": [\n                {\n                  \"label\": \"file H\",\n                  \"value\": 6\n                },\n                {\n                  \"label\": \"file I\",\n                  \"value\": 7\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E4%BB%85%E5%B1%95%E7%A4%BA%E9%80%89%E4%B8%AD%E8%8A%82%E7%82%B9%E6%96%87%E6%9C%AC%E4%BF%A1%E6%81%AF\" href=\"#%E4%BB%85%E5%B1%95%E7%A4%BA%E9%80%89%E4%B8%AD%E8%8A%82%E7%82%B9%E6%96%87%E6%9C%AC%E4%BF%A1%E6%81%AF\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>仅展示选中节点文本信息</h2><p>设置<code>hideNodePathLabel: true</code>，可以隐藏选择框中已选择节点的祖先节点（ancestor）的<code>labelField</code>字段值，仅展示当前选中节点的<code>labelField</code>字段值。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree1\",\n      \"label\": \"展示已选择节点的祖先节点的文本信息\",\n      \"value\": \"1,6,7\",\n      \"multiple\": true,\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        },\n        {\n          \"label\": \"Folder E\",\n          \"children\": [\n            {\n              \"label\": \"Folder G\",\n              \"children\": [\n                {\n                  \"label\": \"file H\",\n                  \"value\": 6\n                },\n                {\n                  \"label\": \"file I\",\n                  \"value\": 7\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"type\": \"divider\"\n    },\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree2\",\n      \"label\": \"仅展示已选择节点的文本信息\",\n      \"value\": \"1,6,7\",\n      \"multiple\": true,\n      \"hideNodePathLabel\": true,\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        },\n        {\n          \"label\": \"Folder E\",\n          \"children\": [\n            {\n              \"label\": \"Folder G\",\n              \"children\": [\n                {\n                  \"label\": \"file H\",\n                  \"value\": 6\n                },\n                {\n                  \"label\": \"file I\",\n                  \"value\": 7\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>更多用法，见 <a href=\"./input-tree\">InputTree</a></p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>hideNodePathLabel</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否隐藏选择框中已选择节点的路径 label 信息</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本使用",
          "fragment": "%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "level": 2
        },
        {
          "label": "仅展示选中节点文本信息",
          "fragment": "%E4%BB%85%E5%B1%95%E7%A4%BA%E9%80%89%E4%B8%AD%E8%8A%82%E7%82%B9%E6%96%87%E6%9C%AC%E4%BF%A1%E6%81%AF",
          "fullPath": "#%E4%BB%85%E5%B1%95%E7%A4%BA%E9%80%89%E4%B8%AD%E8%8A%82%E7%82%B9%E6%96%87%E6%9C%AC%E4%BF%A1%E6%81%AF",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
