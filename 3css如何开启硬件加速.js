/**
 * 渲染过程：DOM解析生成DOM树，DOM树与CSS生成渲染树，渲染树中包含大量渲染元素。渲染元素会分布
 * 在一个图层中，每个图层又会被加载到GPU形成渲染纹理。然而GPU中的transform是不会触发重绘的
 *
 * css可以触发硬件加速的有：
 * transform  opacity  filter
 */
