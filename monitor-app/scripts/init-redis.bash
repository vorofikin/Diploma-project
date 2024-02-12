#cache_service --daemonize yes && sleep 1
#
#redis-cli < /usr/local/bin/init.redis
#redis-cli save
#
#
#redis-cli save
#redis-cli shutdown
## start the server normally
#cache_service
#
#echo "redis inited"

redis-cli
SET SecondBranchSaturatedSolutionTemp 90
SET ThirdBranchSaturatedSolutionTemp 104
SET DeeplyRegeneratedSolution 70
SET VaporGasMixtureTemperature 80
SET VaporGasMixturePressure 0.17
SET ConvertedGasPressure 2.8
SET ConvertedGasTemperature 30
save
exit
echo "Redis inited"