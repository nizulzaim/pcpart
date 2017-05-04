<template>
    <div class="appbar-padding">
		<div style="z-index:100" class="background-blue-grey-700" v-depth="1">
			<page-container>
				<div class="row has-gutter middle-xs" style="padding-top: 36px; padding-bottom: 36px;">
					<div class="col-lg-fluid-8">
						<div class="font-headline color-white">Build Guides</div>
						<div class="font-subhead color-white">
							Building your own PC and need ideas on where to get started? Explore our build guides, which cover systems for all use-cases and budgets, or create your own and share it with our community.
						</div>
						<div>
							<raised-button v-ripple>Build Guides</raised-button>
						</div>
					</div>

					<div class="col-lg-fluid-8">
						<router-link to="/guides/1">
							<cards class="cards-hover color-grey-900">
								<cards-content>
									<div class="font-body2 font-medium">Featured Guide</div>
									<div class="font-headline">Enthusiast AMD Ryzen Gaming Build</div>
								</cards-content>
								<cards-content class="profile">
									<avatar text="Rafael Romeli"></avatar>
									<div class="profile-title">Rafael Romeli</div>
									<div class="profile-subhead">Sometext Here</div>
								</cards-content>
								<cards-content>
									<div class="font-subhead font-light no-margin">Sometext Here</div>
									<div class="font-subhead font-light no-margin">Sometext Here</div>
									<div class="font-subhead font-light">Sometext Here</div>
									<div class="font-title">MYR 4,500.00</div>
								</cards-content>
							</cards>
						</router-link>
					</div>
				</div>
			</page-container>
			
		</div>
		<div class="background-white">
			<page-container>
				<div class="row has-gutter center-xs middle-xs">
					<div class="col-lg-fluid-16">
						<div class="row">
							<div class="col-xs-fluid-6">
								<router-link to="/product/cpu">
									<cards v-ripple>
										<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;background: #000; opacity: 0.2"></div>
										<img src="/img/nav-cpu.png" alt="">
									</cards>
								</router-link>
							</div>
							<div class="col-xs-fluid-6">
								<router-link to="/hello">
									<cards v-ripple>
										<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;background: #000; opacity: 0.2"></div>
										<img src="/img/nav-cpucooler.png" alt="">
									</cards>
								</router-link>
							</div>
							<div class="col-xs-fluid-6">
								<router-link to="/hello">
									<cards v-ripple>
										<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;background: #000; opacity: 0.2"></div>
										<img src="/img/nav-motherboard.png" alt="">
									</cards>
								</router-link>
							</div>
							<div class="col-xs-fluid-6">
								<router-link to="/hello">
									<cards v-ripple>
										<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;background: #000; opacity: 0.2"></div>
										<img src="/img/nav-memory.png" alt="">
									</cards>
								</router-link>
							</div>
							<div class="col-xs-fluid-6">
								<router-link to="/hello">
									<cards v-ripple>
										<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;background: #000; opacity: 0.2"></div>
										<img src="/img/nav-ssd.png" alt="">
									</cards>
								</router-link>
							</div>
							<div class="col-xs-fluid-6">
								<router-link to="/hello">
									<cards v-ripple>
										<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;background: #000; opacity: 0.2"></div>
										<img src="/img/nav-videocard.png" alt="">
									</cards>
								</router-link>
							</div>
							<div class="col-xs-fluid-6">
								<router-link to="/hello">
									<cards v-ripple>
										<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;background: #000; opacity: 0.2"></div>
										<img src="/img/nav-powersupply.png" alt="">
									</cards>
								</router-link>
							</div>
							<div class="col-xs-fluid-6">
								<router-link to="/hello">
									<cards v-ripple>
										<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;background: #000; opacity: 0.2"></div>
										<img src="/img/nav-case.png" alt="">
									</cards>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</page-container>
		</div>
	</div>
</template>

<style lang="scss" scoped> 

.clear{
	clear: both;
}
img{
	max-width: 100%;
}
h1, h2, h3, h4{
	padding: 0;
	margin: 0;
}
// VARIABLES
$mainblack: #22262b;
$amain: #fbb053;
$grisclaro: #e0e2e2;
$display: #abadc6;
$item: #d1c9bf;
$codred: #ac5e47;

// MISC
.wrap{
	width: 100%;
	position: relative;
	background-color: #2a56c6;
	display: flex;
	justify-content: center;
	align-items: center
}
.comp{
    width: 100%;
    height: auto;
    text-align: center;
    .monitor{
		width: 275px;
		height: 181px;
		display: block;
		margin: 0 auto;
		border-radius: 10px 10px 0px 0px;
		padding: 9px;
		border: solid 1px $grisclaro;
		background-color: black;
    }
    .mid{
    	float: left;
    	display: block;
    	height: 100%;
    	position: relative;
    	background-color: $display;
    	width: 50%;
    	&.codigo{
    		background-color: $mainblack;
    	}
    }
    .site{
    	overflow: hidden;
    	position: absolute;
		width: 105px;
		height: 138px;
	    bottom: 0;
	    right: 0;
    	.topbar{
			width: 100%;

    	}
    	.cerrar{
			width: 100%;
			padding: 3px;
			line-height: 0;
			display: flex;
		    align-items: center;
		    justify-content: flex-start;
		    border-radius: 4px 4px 0px 0px;
			background-color: #afa895;
			&>div{
				display: inline-block;
				width: 2px;
				height: 2px;
				border-radius: 50%;
				background: white;
				margin: 0px 1px;
			}
		}
		.inhead{
			padding: 2px;
			height: 5px;
			background-color: #ddd8cf;
			.item{
				width: 10px;
    			height: 1px;
				background-color: $item;
				margin: 0 1px;
				display: block;
				float: left;
			}
		}
    }
    .txr{
    	text-align: right;
		.item{
			float: right;
		}
    }
    .inslid{
    	width: 100%;
    	height: 33px;
    	background-color: #efebe2;
    }
    .incont{
		padding-top: 10px;
		background: #fefaf0;
    	.item{
			background-color: $item;
			width: 53px;
			height: 2px;
			display: block;
			margin: 0 auto;
			margin-top: 1px;
			&:nth-child(1){
				width: 20px;
			}
			&:nth-child(2){
				margin-top: 3px;
				width: 41px;
			}
			&:nth-child(3){
				width: 32px;
			}
			&:nth-child(4){
				width: 23px;
			}
    	}
    	.wid{
    		width: 100%;
    		padding: 8px 1px;
    		.itwid{
    			width: 33.333%;
    			float: left;
    			height: 26px;
    			padding: 0px 3px;
    			&>div{
    				width: 100%;
    				height: 100%;
    				background-color: #f5f1e6;
    				position: relative;
    				.contfoot{
    					position: absolute;
    					bottom: 0;
    					left: 0;
    					height: 6px;
    					width: 100%;
    					background-color: #ebe5dc;
    				}
    			}
    		}
    	}
    	.infoot{
    		background-color: #efebe2;
    		height: 26px;
    		width: 100%;
    	}
    }
	@keyframes code {
	    0% {
			opacity: 1;
	    }
	    50% {
			opacity: 0.6;
	    }
	    100% {
			opacity: 1;
	    }
	}
    .codigo{
    	padding: 14px 0px 14px 14px;
    	.var{
    		background-color: $codred;
	    	animation: code;
			animation-duration: 0.3s;
			animation-iteration-count: infinite;
    	}
    	.cont{
    		background-color: #464748;
	    	animation: code;
			animation-duration: 0.5s;
			animation-iteration-count: infinite;
    	}
    	.fun{
    		background-color: $amain;
	    	animation: code;
			animation-duration: 0.2s;
			animation-iteration-count: infinite;
    	}
    	.atr{
    		background-color: #645572;
	    	animation: code;
			animation-duration: 0.1s;
			animation-iteration-count: infinite;
    	}
    	.item{
    		height: 3px;
    		width: 20px;
    		float: left;
    		margin-right: 3px;
    		&.min{
    			width: 13px;
    		}
    		&.lrg{
    			width: 30px;
    		}
    	}
    	.line{
    		padding: 2px 0;
    		width: 100%;
    	}
    	.tab1{
    		padding-left: 5px;
    	}
    	.tab2{
    		padding-left: 8px;
    	}
    	.tab3{
    		padding-left: 10px;
    	}
    	.tab4{
    		padding-left: 12px;
    	}
    }
}

.base {
    width: 338px;
    height: 12px;
    background: $grisclaro;
    display: block;
    margin: 0 auto;
    border-radius: 0px 0px 6px 6px;
}  
</style>