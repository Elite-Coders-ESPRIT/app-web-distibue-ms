// eurekaConfig.js

const EurekaConfig = {
	instance: {
		instanceId: "enseignant-service-" + process.env.PORT || "3000",
		app: "ENSEIGNANT-SERVICE",
		hostName: "localhost:3000",
		ipAddr: "127.0.0.1:3000",
		statusPageUrl: `http://localhost:${process.env.PORT || "3000"}/info`,
		port: {
			$: process.env.PORT || "3000",
			"@enabled": "true",
		},
		vipAddress: "enseignant-service",
		dataCenterInfo: {
			"@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
			name: "MyOwn",
		},
	},
	eureka: {
		host: "eureka",
		port: 8761,
		servicePath: "/eureka/apps/",
	},
};

module.exports = EurekaConfig;
