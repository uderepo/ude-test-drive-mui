import type { ReactNode } from 'react';
import { Box, Button, Card, CardContent, Typography, List, ListItem, Chip, Switch } from '@mui/material';
function Host(props: { label: string; children?: ReactNode }) {
  return <Box sx={{ border: '1px dashed #999', m: 0.5, p: 0.5 }} data-host={props.label}>{props.children}</Box>;
}
/** Средний экран на MUI (~200 строк): Box/Card/List/Chip/Switch, sx, свой Host с children. Случай из inspector-3.8-report-cost. */
export default function ScreenMuiSize() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">MUI size ~mid</Typography>
      <Button variant="contained">Mui contained</Button>
      <Button variant="outlined" sx={{ p: 2 }}>Mui sx</Button>
      <Host label="shown"><Typography>child via children prop</Typography></Host>
      <Host label="empty">{null}</Host>
      <Card><CardContent><Typography>card text</Typography></CardContent></Card>
      <List>
        <ListItem className="hidden" sx={{ py: 1 }}><Chip label="row-0" /><Switch defaultChecked={true} />item 0</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-1" /><Switch defaultChecked={false} />item 1</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-2" /><Switch defaultChecked={true} />item 2</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-3" /><Switch defaultChecked={false} />item 3</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-4" /><Switch defaultChecked={true} />item 4</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-5" /><Switch defaultChecked={false} />item 5</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-6" /><Switch defaultChecked={true} />item 6</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-7" /><Switch defaultChecked={false} />item 7</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-8" /><Switch defaultChecked={true} />item 8</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-9" /><Switch defaultChecked={false} />item 9</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-10" /><Switch defaultChecked={true} />item 10</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-11" /><Switch defaultChecked={false} />item 11</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-12" /><Switch defaultChecked={true} />item 12</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-13" /><Switch defaultChecked={false} />item 13</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-14" /><Switch defaultChecked={true} />item 14</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-15" /><Switch defaultChecked={false} />item 15</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-16" /><Switch defaultChecked={true} />item 16</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-17" /><Switch defaultChecked={false} />item 17</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-18" /><Switch defaultChecked={true} />item 18</ListItem>
        <ListItem className="hidden" sx={{ py: 2 }}><Chip label="row-19" /><Switch defaultChecked={false} />item 19</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-20" /><Switch defaultChecked={true} />item 20</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-21" /><Switch defaultChecked={false} />item 21</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-22" /><Switch defaultChecked={true} />item 22</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-23" /><Switch defaultChecked={false} />item 23</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-24" /><Switch defaultChecked={true} />item 24</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-25" /><Switch defaultChecked={false} />item 25</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-26" /><Switch defaultChecked={true} />item 26</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-27" /><Switch defaultChecked={false} />item 27</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-28" /><Switch defaultChecked={true} />item 28</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-29" /><Switch defaultChecked={false} />item 29</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-30" /><Switch defaultChecked={true} />item 30</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-31" /><Switch defaultChecked={false} />item 31</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-32" /><Switch defaultChecked={true} />item 32</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-33" /><Switch defaultChecked={false} />item 33</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-34" /><Switch defaultChecked={true} />item 34</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-35" /><Switch defaultChecked={false} />item 35</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-36" /><Switch defaultChecked={true} />item 36</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-37" /><Switch defaultChecked={false} />item 37</ListItem>
        <ListItem className="hidden" sx={{ py: 3 }}><Chip label="row-38" /><Switch defaultChecked={true} />item 38</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-39" /><Switch defaultChecked={false} />item 39</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-40" /><Switch defaultChecked={true} />item 40</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-41" /><Switch defaultChecked={false} />item 41</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-42" /><Switch defaultChecked={true} />item 42</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-43" /><Switch defaultChecked={false} />item 43</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-44" /><Switch defaultChecked={true} />item 44</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-45" /><Switch defaultChecked={false} />item 45</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-46" /><Switch defaultChecked={true} />item 46</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-47" /><Switch defaultChecked={false} />item 47</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-48" /><Switch defaultChecked={true} />item 48</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-49" /><Switch defaultChecked={false} />item 49</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-50" /><Switch defaultChecked={true} />item 50</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-51" /><Switch defaultChecked={false} />item 51</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-52" /><Switch defaultChecked={true} />item 52</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-53" /><Switch defaultChecked={false} />item 53</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-54" /><Switch defaultChecked={true} />item 54</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-55" /><Switch defaultChecked={false} />item 55</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-56" /><Switch defaultChecked={true} />item 56</ListItem>
        <ListItem className="hidden" sx={{ py: 1 }}><Chip label="row-57" /><Switch defaultChecked={false} />item 57</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-58" /><Switch defaultChecked={true} />item 58</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-59" /><Switch defaultChecked={false} />item 59</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-60" /><Switch defaultChecked={true} />item 60</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-61" /><Switch defaultChecked={false} />item 61</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-62" /><Switch defaultChecked={true} />item 62</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-63" /><Switch defaultChecked={false} />item 63</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-64" /><Switch defaultChecked={true} />item 64</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-65" /><Switch defaultChecked={false} />item 65</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-66" /><Switch defaultChecked={true} />item 66</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-67" /><Switch defaultChecked={false} />item 67</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-68" /><Switch defaultChecked={true} />item 68</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-69" /><Switch defaultChecked={false} />item 69</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-70" /><Switch defaultChecked={true} />item 70</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-71" /><Switch defaultChecked={false} />item 71</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-72" /><Switch defaultChecked={true} />item 72</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-73" /><Switch defaultChecked={false} />item 73</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-74" /><Switch defaultChecked={true} />item 74</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-75" /><Switch defaultChecked={false} />item 75</ListItem>
        <ListItem className="hidden" sx={{ py: 2 }}><Chip label="row-76" /><Switch defaultChecked={true} />item 76</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-77" /><Switch defaultChecked={false} />item 77</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-78" /><Switch defaultChecked={true} />item 78</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-79" /><Switch defaultChecked={false} />item 79</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-80" /><Switch defaultChecked={true} />item 80</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-81" /><Switch defaultChecked={false} />item 81</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-82" /><Switch defaultChecked={true} />item 82</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-83" /><Switch defaultChecked={false} />item 83</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-84" /><Switch defaultChecked={true} />item 84</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-85" /><Switch defaultChecked={false} />item 85</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-86" /><Switch defaultChecked={true} />item 86</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-87" /><Switch defaultChecked={false} />item 87</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-88" /><Switch defaultChecked={true} />item 88</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-89" /><Switch defaultChecked={false} />item 89</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-90" /><Switch defaultChecked={true} />item 90</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-91" /><Switch defaultChecked={false} />item 91</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-92" /><Switch defaultChecked={true} />item 92</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-93" /><Switch defaultChecked={false} />item 93</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-94" /><Switch defaultChecked={true} />item 94</ListItem>
        <ListItem className="hidden" sx={{ py: 3 }}><Chip label="row-95" /><Switch defaultChecked={false} />item 95</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-96" /><Switch defaultChecked={true} />item 96</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-97" /><Switch defaultChecked={false} />item 97</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-98" /><Switch defaultChecked={true} />item 98</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-99" /><Switch defaultChecked={false} />item 99</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-100" /><Switch defaultChecked={true} />item 100</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-101" /><Switch defaultChecked={false} />item 101</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-102" /><Switch defaultChecked={true} />item 102</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-103" /><Switch defaultChecked={false} />item 103</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-104" /><Switch defaultChecked={true} />item 104</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-105" /><Switch defaultChecked={false} />item 105</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-106" /><Switch defaultChecked={true} />item 106</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-107" /><Switch defaultChecked={false} />item 107</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-108" /><Switch defaultChecked={true} />item 108</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-109" /><Switch defaultChecked={false} />item 109</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-110" /><Switch defaultChecked={true} />item 110</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-111" /><Switch defaultChecked={false} />item 111</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-112" /><Switch defaultChecked={true} />item 112</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-113" /><Switch defaultChecked={false} />item 113</ListItem>
        <ListItem className="hidden" sx={{ py: 1 }}><Chip label="row-114" /><Switch defaultChecked={true} />item 114</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-115" /><Switch defaultChecked={false} />item 115</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-116" /><Switch defaultChecked={true} />item 116</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-117" /><Switch defaultChecked={false} />item 117</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-118" /><Switch defaultChecked={true} />item 118</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-119" /><Switch defaultChecked={false} />item 119</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-120" /><Switch defaultChecked={true} />item 120</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-121" /><Switch defaultChecked={false} />item 121</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-122" /><Switch defaultChecked={true} />item 122</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-123" /><Switch defaultChecked={false} />item 123</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-124" /><Switch defaultChecked={true} />item 124</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-125" /><Switch defaultChecked={false} />item 125</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-126" /><Switch defaultChecked={true} />item 126</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-127" /><Switch defaultChecked={false} />item 127</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-128" /><Switch defaultChecked={true} />item 128</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-129" /><Switch defaultChecked={false} />item 129</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-130" /><Switch defaultChecked={true} />item 130</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-131" /><Switch defaultChecked={false} />item 131</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-132" /><Switch defaultChecked={true} />item 132</ListItem>
        <ListItem className="hidden" sx={{ py: 2 }}><Chip label="row-133" /><Switch defaultChecked={false} />item 133</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-134" /><Switch defaultChecked={true} />item 134</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-135" /><Switch defaultChecked={false} />item 135</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-136" /><Switch defaultChecked={true} />item 136</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-137" /><Switch defaultChecked={false} />item 137</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-138" /><Switch defaultChecked={true} />item 138</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-139" /><Switch defaultChecked={false} />item 139</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-140" /><Switch defaultChecked={true} />item 140</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-141" /><Switch defaultChecked={false} />item 141</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-142" /><Switch defaultChecked={true} />item 142</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-143" /><Switch defaultChecked={false} />item 143</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-144" /><Switch defaultChecked={true} />item 144</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-145" /><Switch defaultChecked={false} />item 145</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-146" /><Switch defaultChecked={true} />item 146</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-147" /><Switch defaultChecked={false} />item 147</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-148" /><Switch defaultChecked={true} />item 148</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-149" /><Switch defaultChecked={false} />item 149</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-150" /><Switch defaultChecked={true} />item 150</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-151" /><Switch defaultChecked={false} />item 151</ListItem>
        <ListItem className="hidden" sx={{ py: 3 }}><Chip label="row-152" /><Switch defaultChecked={true} />item 152</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-153" /><Switch defaultChecked={false} />item 153</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-154" /><Switch defaultChecked={true} />item 154</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-155" /><Switch defaultChecked={false} />item 155</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-156" /><Switch defaultChecked={true} />item 156</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-157" /><Switch defaultChecked={false} />item 157</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-158" /><Switch defaultChecked={true} />item 158</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-159" /><Switch defaultChecked={false} />item 159</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-160" /><Switch defaultChecked={true} />item 160</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-161" /><Switch defaultChecked={false} />item 161</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-162" /><Switch defaultChecked={true} />item 162</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-163" /><Switch defaultChecked={false} />item 163</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-164" /><Switch defaultChecked={true} />item 164</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-165" /><Switch defaultChecked={false} />item 165</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-166" /><Switch defaultChecked={true} />item 166</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-167" /><Switch defaultChecked={false} />item 167</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-168" /><Switch defaultChecked={true} />item 168</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-169" /><Switch defaultChecked={false} />item 169</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-170" /><Switch defaultChecked={true} />item 170</ListItem>
        <ListItem className="hidden" sx={{ py: 1 }}><Chip label="row-171" /><Switch defaultChecked={false} />item 171</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-172" /><Switch defaultChecked={true} />item 172</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-173" /><Switch defaultChecked={false} />item 173</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-174" /><Switch defaultChecked={true} />item 174</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-175" /><Switch defaultChecked={false} />item 175</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-176" /><Switch defaultChecked={true} />item 176</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-177" /><Switch defaultChecked={false} />item 177</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-178" /><Switch defaultChecked={true} />item 178</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-179" /><Switch defaultChecked={false} />item 179</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-180" /><Switch defaultChecked={true} />item 180</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-181" /><Switch defaultChecked={false} />item 181</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-182" /><Switch defaultChecked={true} />item 182</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-183" /><Switch defaultChecked={false} />item 183</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-184" /><Switch defaultChecked={true} />item 184</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-185" /><Switch defaultChecked={false} />item 185</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-186" /><Switch defaultChecked={true} />item 186</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-187" /><Switch defaultChecked={false} />item 187</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-188" /><Switch defaultChecked={true} />item 188</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-189" /><Switch defaultChecked={false} />item 189</ListItem>
        <ListItem className="hidden" sx={{ py: 2 }}><Chip label="row-190" /><Switch defaultChecked={true} />item 190</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-191" /><Switch defaultChecked={false} />item 191</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-192" /><Switch defaultChecked={true} />item 192</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-193" /><Switch defaultChecked={false} />item 193</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-194" /><Switch defaultChecked={true} />item 194</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-195" /><Switch defaultChecked={false} />item 195</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-196" /><Switch defaultChecked={true} />item 196</ListItem>
        <ListItem sx={{ py: 3 }}><Chip label="row-197" /><Switch defaultChecked={false} />item 197</ListItem>
        <ListItem sx={{ py: 1 }}><Chip label="row-198" /><Switch defaultChecked={true} />item 198</ListItem>
        <ListItem sx={{ py: 2 }}><Chip label="row-199" /><Switch defaultChecked={false} />item 199</ListItem>
      </List>
    </Box>
  );
}
